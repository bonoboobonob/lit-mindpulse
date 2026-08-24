import { BOOK_QUOTES } from '../data/bookQuotes';

// Smart FIFO Queue to prevent repeating the same quote or book consecutively
class QuoteQueueManager {
  constructor() {
    this.history = []; // array of recently used quote IDs
    this.maxHistory = 25; // number of recent quotes to avoid
    this.lastBook = null; // track immediate last book
  }

  // Get next non-repeating quote
  getNextQuote(genre = 'all', difficulty = 'all', customQuotes = []) {
    const allQuotes = [...BOOK_QUOTES, ...customQuotes];

    // Filter matching genre and difficulty
    let matching = allQuotes.filter(q => {
      const matchG = genre === 'all' || q.genre === genre;
      const matchD = difficulty === 'all' || q.difficulty === difficulty;
      return matchG && matchD;
    });

    if (matching.length === 0) {
      matching = allQuotes;
    }

    // Filter out quotes that are in recent history
    let freshQuotes = matching.filter(q => !this.history.includes(q.id));

    // If fresh pool is too small or exhausted, trim history to keep things moving
    if (freshQuotes.length === 0) {
      this.history = this.history.slice(-Math.floor(matching.length / 2));
      freshQuotes = matching.filter(q => !this.history.includes(q.id));
      if (freshQuotes.length === 0) {
        freshQuotes = matching;
      }
    }

    // Prefer a quote from a DIFFERENT book than the immediate last one if multiple options exist
    let candidates = freshQuotes;
    if (this.lastBook && freshQuotes.length > 1) {
      const differentBookCandidates = freshQuotes.filter(q => q.book !== this.lastBook);
      if (differentBookCandidates.length > 0) {
        candidates = differentBookCandidates;
      }
    }

    // Pick random candidate from fresh pool
    const selected = candidates[Math.floor(Math.random() * candidates.length)] || matching[0];

    // Update history
    this.history.push(selected.id);
    if (this.history.length > this.maxHistory) {
      this.history.shift();
    }
    this.lastBook = selected.book;

    return selected;
  }

  resetHistory() {
    this.history = [];
    this.lastBook = null;
  }
}

export const quoteQueue = new QuoteQueueManager();
