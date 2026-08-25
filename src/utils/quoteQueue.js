import { BOOK_QUOTES } from '../data/bookQuotes';
import { BOOKS_DATABASE } from '../data/booksDatabase';

// Smart FIFO Queue to prevent repeating the same quote consecutively
class QuoteQueueManager {
  constructor() {
    this.history = []; // array of recently used quote IDs
    this.maxHistory = 25; // number of recent quotes to avoid
    this.lastBook = null; // track immediate last book
  }

  // Get next non-repeating quote supporting genre, difficulty, specific book, or custom quotes
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

    let allQuotes = [...BOOK_QUOTES, ...targetCustom];

    // If specific book is requested, extract and format its passages
    if (targetBookId) {
      const bookObj = BOOKS_DATABASE.find(b => b.id === targetBookId);
      if (bookObj && bookObj.passages && bookObj.passages.length > 0) {
        allQuotes = bookObj.passages.map(p => ({
          id: p.id,
          genre: bookObj.genre,
          difficulty: p.difficulty,
          book: bookObj.title,
          author: bookObj.author,
          quote: p.quote,
          bookId: bookObj.id,
        }));
      }
    }

    // Filter matching genre and difficulty
    let matching = allQuotes.filter(q => {
      const matchG = genre === 'all' || targetBookId || q.genre === genre;
      const matchD = targetDifficulty === 'all' || q.difficulty === targetDifficulty;
      return matchG && matchD;
    });

    if (matching.length === 0) {
      matching = allQuotes;
    }

    // Filter out quotes that are in recent history
    let freshQuotes = matching.filter(q => !this.history.includes(q.id));

    // If fresh pool is exhausted, trim history
    if (freshQuotes.length === 0) {
      this.history = this.history.slice(-Math.floor(matching.length / 2));
      freshQuotes = matching.filter(q => !this.history.includes(q.id));
      if (freshQuotes.length === 0) {
        freshQuotes = matching;
      }
    }

    // Prefer a quote from a DIFFERENT book than the immediate last one if multiple options exist and not in single-book mode
    let candidates = freshQuotes;
    if (!targetBookId && this.lastBook && freshQuotes.length > 1) {
      const differentBookCandidates = freshQuotes.filter(q => q.book !== this.lastBook);
      if (differentBookCandidates.length > 0) {
        candidates = differentBookCandidates;
      }
    }

    // Pick random candidate from fresh pool
    const selected = candidates[Math.floor(Math.random() * candidates.length)] || matching[0];

    // Update history
    if (selected) {
      this.history.push(selected.id);
      if (this.history.length > this.maxHistory) {
        this.history.shift();
      }
      this.lastBook = selected.book;
    }

    return selected;
  }

  resetHistory() {
    this.history = [];
    this.lastBook = null;
  }
}

export const quoteQueue = new QuoteQueueManager();
