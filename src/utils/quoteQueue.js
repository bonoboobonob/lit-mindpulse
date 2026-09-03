import { BOOK_QUOTES } from '../data/bookQuotes';
import { BOOKS_DATABASE } from '../data/booksDatabase';

// Smart Deck Shuffle Queue Engine to ensure 100% fair, non-repeating quote extraction
class QuoteQueueManager {
  constructor() {
    // Map of key -> shuffled array of quote IDs remaining in current cycle
    this.decks = new Map();
    this.lastQuoteId = null;
    this.playedQuoteIds = new Set();
    this.lastBook = null;
  }

  // Generate unique deck key for current filter configuration
  getDeckKey(genre, difficulty, bookId) {
    return `${bookId || 'any'}_${genre || 'all'}_${difficulty || 'all'}`;
  }

  // Shuffle array using Fisher-Yates algorithm
  shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Explicitly mark a quote as played so it is never repeated immediately
  markQuotePlayed(quoteId) {
    if (!quoteId) return;
    this.lastQuoteId = quoteId;
    this.playedQuoteIds.add(quoteId);
    // Remove this ID from all active decks
    for (const [key, deck] of this.decks.entries()) {
      this.decks.set(key, deck.filter(id => id !== quoteId));
    }
  }

  // Get matching quote pool for the given filters
  getMatchingQuotes(genre = 'all', difficulty = 'all', customQuotes = [], bookId = null) {
    let pool = [];
    const safeCustom = Array.isArray(customQuotes) ? customQuotes : [];

    if (bookId) {
      const bookObj = BOOKS_DATABASE.find(b => b.id === bookId);
      if (bookObj && bookObj.passages && bookObj.passages.length > 0) {
        pool = bookObj.passages.map(p => ({
          id: p.id,
          genre: bookObj.genre,
          difficulty: p.difficulty,
          book: bookObj.title,
          author: bookObj.author,
          quote: p.quote,
          bookId: bookObj.id,
        }));
      }
    } else {
      // 1. All passages from BOOKS_DATABASE
      const allDbQuotes = BOOKS_DATABASE.flatMap(b => (b.passages || []).map(p => ({
        id: p.id,
        genre: b.genre,
        difficulty: p.difficulty,
        book: b.title,
        author: b.author,
        quote: p.quote,
        bookId: b.id,
      })));

      const seenQuotes = new Set(allDbQuotes.map(q => q.quote.trim().toLowerCase()));

      // 2. Plus unique curated quotes from BOOK_QUOTES
      const curatedQuotes = [];
      BOOK_QUOTES.forEach(q => {
        const norm = q.quote ? q.quote.trim().toLowerCase() : '';
        if (norm && !seenQuotes.has(norm)) {
          seenQuotes.add(norm);
          // Find matching bookId in BOOKS_DATABASE if available
          const matchedBook = BOOKS_DATABASE.find(b => 
            b.title.toLowerCase() === q.book?.toLowerCase() ||
            (q.book && b.title.toLowerCase().includes(q.book.toLowerCase())) ||
            (q.book && q.book.toLowerCase().includes(b.title.toLowerCase()))
          );

          curatedQuotes.push({
            id: q.id,
            genre: q.genre,
            difficulty: q.difficulty,
            book: q.book,
            author: q.author,
            quote: q.quote,
            bookId: matchedBook ? matchedBook.id : null,
          });
        }
      });

      pool = [...allDbQuotes, ...curatedQuotes, ...safeCustom];
    }

    // Filter by genre (if not single-book mode) and difficulty
    const matching = pool.filter(q => {
      const matchG = bookId || genre === 'all' || q.genre === genre;
      const matchD = difficulty === 'all' || q.difficulty === difficulty;
      return matchG && matchD;
    });

    return matching.length > 0 ? matching : (pool.length > 0 ? pool : BOOK_QUOTES);
  }

  // Get next non-repeating quote supporting full deck cycle
  getNextQuote(genreOrOptions = 'all', difficulty = 'all', customQuotes = [], bookId = null, excludeQuoteId = null) {
    let genre = genreOrOptions;
    let targetDifficulty = difficulty;
    let targetBookId = bookId;
    let targetCustom = Array.isArray(customQuotes) ? customQuotes : [];
    let explicitExcludeId = excludeQuoteId;

    // Handle when 3rd argument is passed as bookId (string) instead of customQuotes array
    if (typeof customQuotes === 'string') {
      targetBookId = customQuotes;
      targetCustom = [];
    }

    if (typeof genreOrOptions === 'object' && genreOrOptions !== null) {
      genre = genreOrOptions.genre || 'all';
      targetDifficulty = genreOrOptions.difficulty || 'all';
      targetBookId = genreOrOptions.bookId || null;
      targetCustom = Array.isArray(genreOrOptions.customQuotes) ? genreOrOptions.customQuotes : [];
      explicitExcludeId = genreOrOptions.excludeQuoteId || excludeQuoteId;
    }

    const bannedId = explicitExcludeId || this.lastQuoteId;

    const matchingPool = this.getMatchingQuotes(genre, targetDifficulty, targetCustom, targetBookId);
    if (!matchingPool || matchingPool.length === 0) {
      return BOOK_QUOTES[0];
    }

    if (matchingPool.length === 1) {
      return matchingPool[0];
    }

    const deckKey = this.getDeckKey(genre, targetDifficulty, targetBookId);
    let currentDeck = this.decks.get(deckKey);

    // If deck doesn't exist, is empty, or only contains the banned quote:
    if (!currentDeck || currentDeck.length === 0 || (currentDeck.length === 1 && currentDeck[0] === bannedId)) {
      const allIds = matchingPool.map(q => q.id);
      const candidateIds = allIds.filter(id => id !== bannedId);
      
      let shuffled = this.shuffle(candidateIds.length > 0 ? candidateIds : allIds);
      if (bannedId && allIds.length > 1 && allIds.includes(bannedId)) {
        // Put the banned quote at the end of the new cycle
        shuffled.push(bannedId);
      }
      currentDeck = shuffled;
      this.decks.set(deckKey, currentDeck);
    }

    // Ensure the top of the deck is NOT bannedId
    if (currentDeck.length > 1 && currentDeck[0] === bannedId) {
      const top = currentDeck.shift();
      currentDeck.push(top);
    }

    // Pop the next quote ID from the deck
    const nextId = currentDeck.shift();
    this.decks.set(deckKey, currentDeck);

    const selectedQuote = matchingPool.find(q => q.id === nextId) || 
                          matchingPool.find(q => q.id !== bannedId) || 
                          matchingPool[0];

    this.lastQuoteId = selectedQuote.id;
    this.playedQuoteIds.add(selectedQuote.id);
    this.lastBook = selectedQuote.book;

    return selectedQuote;
  }

  resetHistory() {
    this.decks.clear();
    this.lastQuoteId = null;
    this.playedQuoteIds.clear();
    this.lastBook = null;
  }
}

export const quoteQueue = new QuoteQueueManager();
