import { BOOK_QUOTES } from '../data/bookQuotes';
import { BOOKS_DATABASE } from '../data/booksDatabase';

// Smart Deck Shuffle Queue Engine to ensure 100% fair, non-repeating quote extraction
class QuoteQueueManager {
  constructor() {
    // Map of key -> shuffled array of quote IDs remaining in current cycle
    this.decks = new Map();
    this.lastQuoteId = null;
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

  // Get matching quote pool for the given filters
  getMatchingQuotes(genre = 'all', difficulty = 'all', customQuotes = [], bookId = null) {
    let pool = [];

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
      pool = [...BOOK_QUOTES, ...customQuotes];
    }

    // Filter by genre (if not single-book mode) and difficulty
    const matching = pool.filter(q => {
      const matchG = bookId || genre === 'all' || q.genre === genre;
      const matchD = difficulty === 'all' || q.difficulty === difficulty;
      return matchG && matchD;
    });

    return matching.length > 0 ? matching : pool;
  }

  // Get next non-repeating quote supporting full deck cycle
  getNextQuote(genreOrOptions = 'all', difficulty = 'all', customQuotes = [], bookId = null) {
    let genre = genreOrOptions;
    let targetDifficulty = difficulty;
    let targetBookId = bookId;
    let targetCustom = customQuotes;

    if (typeof genreOrOptions === 'object' && genreOrOptions !== null) {
      genre = genreOrOptions.genre || 'all';
      targetDifficulty = genreOrOptions.difficulty || 'all';
      targetBookId = genreOrOptions.bookId || null;
      targetCustom = genreOrOptions.customQuotes || [];
    }

    const matchingPool = this.getMatchingQuotes(genre, targetDifficulty, targetCustom, targetBookId);
    if (!matchingPool || matchingPool.length === 0) {
      return BOOK_QUOTES[0];
    }

    if (matchingPool.length === 1) {
      return matchingPool[0];
    }

    const deckKey = this.getDeckKey(genre, targetDifficulty, targetBookId);
    let currentDeck = this.decks.get(deckKey);

    // If deck doesn't exist or is empty, initialize a fresh shuffled deck
    if (!currentDeck || currentDeck.length === 0) {
      const shuffledIds = this.shuffle(matchingPool.map(q => q.id));
      
      // Ensure the first quote of the new deck is not the immediate last quote shown
      if (shuffledIds.length > 1 && shuffledIds[0] === this.lastQuoteId) {
        const temp = shuffledIds[0];
        shuffledIds[0] = shuffledIds[1];
        shuffledIds[1] = temp;
      }

      currentDeck = shuffledIds;
      this.decks.set(deckKey, currentDeck);
    }

    // Pop the next quote ID from the deck
    const nextId = currentDeck.shift();
    this.decks.set(deckKey, currentDeck);

    const selectedQuote = matchingPool.find(q => q.id === nextId) || matchingPool[0];

    this.lastQuoteId = selectedQuote.id;
    this.lastBook = selectedQuote.book;

    return selectedQuote;
  }

  resetHistory() {
    this.decks.clear();
    this.lastQuoteId = null;
    this.lastBook = null;
  }
}

export const quoteQueue = new QuoteQueueManager();
