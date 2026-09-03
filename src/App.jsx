import React, { useState, useEffect, useRef } from 'react';
import Header from './components/common/Header';
import BottomNav from './components/common/BottomNav';
import StatsModal from './components/common/StatsModal';
import TipsModal from './components/common/TipsModal';
import HomeMenu from './components/HomeMenu';
import GenreDetailView from './components/GenreDetailView';
import BookDetailView from './components/BookDetailView';
import FullTypingGame from './components/games/FullTypingGame';
import ClozeRecallGame from './components/games/ClozeRecallGame';
import WordScrambleGame from './components/games/WordScrambleGame';
import TextDetectiveGame from './components/games/TextDetectiveGame';
import FirstLetterGame from './components/games/FirstLetterGame';
import SpeedTrioGame from './components/games/SpeedTrioGame';
import MyLibrary from './components/MyLibrary';
import { getSavedStats, saveGameResult, getCustomQuotes, saveCustomQuotes, getSavedTheme, saveTheme } from './utils/storage';
import { quoteQueue } from './utils/quoteQueue';
import { sounds } from './utils/sound';

// Hash and History Routing Helpers
const getHashForState = (state) => {
  if (!state || state.screen === 'home') return '#home';
  if (state.screen === 'genreDetail') return `#genre/${state.genre || 'all'}`;
  if (state.screen === 'bookDetail') return `#book/${state.bookId || 'all'}`;
  if (state.screen === 'library') return '#library';
  return `#game/${state.screen}`;
};

const parseStateFromHash = (hash) => {
  const clean = (hash || '').replace(/^#\/?/, '');
  if (!clean || clean === 'home') {
    return { screen: 'home', genre: 'all', bookId: null, difficulty: 'all' };
  }
  if (clean.startsWith('genre/')) {
    const genre = clean.split('/')[1] || 'all';
    return { screen: 'genreDetail', genre, bookId: null, difficulty: 'all' };
  }
  if (clean.startsWith('book/')) {
    const bookId = clean.split('/')[1] || null;
    return { screen: 'bookDetail', bookId, genre: 'all', difficulty: 'all' };
  }
  if (clean === 'library') {
    return { screen: 'library', genre: 'all', bookId: null, difficulty: 'all' };
  }
  if (clean.startsWith('game/')) {
    const game = clean.split('/')[1] || 'fullTyping';
    return { screen: game, genre: 'all', bookId: null, difficulty: 'all' };
  }
  return { screen: 'home', genre: 'all', bookId: null, difficulty: 'all' };
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(() => {
    const init = parseStateFromHash(typeof window !== 'undefined' ? window.location.hash : '');
    return init.screen || 'home';
  });
  const [selectedGenre, setSelectedGenre] = useState(() => {
    const init = parseStateFromHash(typeof window !== 'undefined' ? window.location.hash : '');
    return init.genre || 'all';
  });
  const [selectedBookId, setSelectedBookId] = useState(() => {
    const init = parseStateFromHash(typeof window !== 'undefined' ? window.location.hash : '');
    return init.bookId || null;
  });
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [stats, setStats] = useState(getSavedStats());
  const [customQuotes, setCustomQuotes] = useState(getCustomQuotes());
  const [activeQuote, setActiveQuote] = useState(null);
  const [pausedGameSession, setPausedGameSession] = useState(null);
  const [gameSessionId, setGameSessionId] = useState(1);
  const [theme, setTheme] = useState(getSavedTheme());
  
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isTipsOpen, setIsTipsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const isStatsOpenRef = useRef(false);
  const isTipsOpenRef = useRef(false);

  useEffect(() => {
    isStatsOpenRef.current = isStatsOpen;
  }, [isStatsOpen]);

  useEffect(() => {
    isTipsOpenRef.current = isTipsOpen;
  }, [isTipsOpen]);

  // Unified forward navigation that syncs with browser history (PushState & Hash)
  const navigateTo = (newScreen, params = {}, replace = false) => {
    const newState = {
      screen: newScreen,
      genre: params.genre !== undefined ? params.genre : selectedGenre,
      bookId: params.bookId !== undefined ? params.bookId : selectedBookId,
      difficulty: params.difficulty !== undefined ? params.difficulty : selectedDifficulty,
      quote: params.quote !== undefined ? params.quote : (params.clearQuote ? null : activeQuote),
      pausedSession: params.pausedSession !== undefined ? params.pausedSession : pausedGameSession,
    };

    const hash = getHashForState(newState);

    if (replace) {
      window.history.replaceState(newState, '', hash);
    } else {
      window.history.pushState(newState, '', hash);
    }

    if (params.sessionIdIncrement) {
      setGameSessionId(prev => prev + 1);
    }

    setCurrentScreen(newState.screen);
    if (params.genre !== undefined) setSelectedGenre(params.genre);
    if (params.bookId !== undefined) setSelectedBookId(params.bookId);
    if (params.difficulty !== undefined) setSelectedDifficulty(params.difficulty);
    if (params.quote !== undefined || params.clearQuote) setActiveQuote(params.quote || null);
    if (params.pausedSession !== undefined) setPausedGameSession(params.pausedSession);
  };

  // Unified backward navigation for in-app buttons (uses browser history so mouse & browser back match)
  const handleGoBack = (fallbackScreen = 'home', fallbackParams = {}) => {
    sounds.playClick();
    if (window.history.state && window.history.state.screen && window.history.length > 1) {
      window.history.back();
    } else {
      navigateTo(fallbackScreen, fallbackParams, true);
    }
  };

  // Browser & Mouse Back Button Listener (popstate)
  useEffect(() => {
    // Initial state setup on first load
    const initialFromHash = parseStateFromHash(window.location.hash);
    const initialHistoryState = window.history.state || initialFromHash;
    const initialHash = getHashForState(initialHistoryState);

    window.history.replaceState(initialHistoryState, '', initialHash);

    if (initialHistoryState.screen && initialHistoryState.screen !== 'home') {
      setCurrentScreen(initialHistoryState.screen);
      if (initialHistoryState.genre) setSelectedGenre(initialHistoryState.genre);
      if (initialHistoryState.bookId) setSelectedBookId(initialHistoryState.bookId);
      if (initialHistoryState.difficulty) setSelectedDifficulty(initialHistoryState.difficulty);
    }

    const handlePopState = (e) => {
      // 1. If a modal is open, close modal and prevent page exit
      if (isStatsOpenRef.current) {
        setIsStatsOpen(false);
        return;
      }
      if (isTipsOpenRef.current) {
        setIsTipsOpen(false);
        return;
      }

      // 2. Read popped state or fallback to hash
      const state = e.state || parseStateFromHash(window.location.hash);
      if (state) {
        setCurrentScreen(state.screen || 'home');
        setSelectedGenre(state.genre || 'all');
        setSelectedBookId(state.bookId || null);
        setSelectedDifficulty(state.difficulty || 'all');
        setActiveQuote(state.quote || null);
        setPausedGameSession(state.pausedSession || null);
        setGameSessionId(prev => prev + 1);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    setStats(getSavedStats());
    setCustomQuotes(getCustomQuotes());
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    saveTheme(theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleGameOver = ({ gameId, score, accuracy, wordsCount }) => {
    const updated = saveGameResult({ gameId, score, accuracy, wordsCount });
    setStats(updated);
  };

  const handleAddCustomQuote = (newQuote) => {
    const updated = [newQuote, ...customQuotes];
    setCustomQuotes(updated);
    saveCustomQuotes(updated);
  };

  const handleDeleteCustomQuote = (id) => {
    const updated = customQuotes.filter(q => q.id !== id);
    setCustomQuotes(updated);
    saveCustomQuotes(updated);
  };

  const handleStartQuotePractice = (quote, mode = 'fullTyping') => {
    if (quote?.id) {
      quoteQueue.markQuotePlayed(quote.id);
    }
    navigateTo(mode, {
      quote,
      pausedSession: null,
      sessionIdIncrement: true,
    });
  };

  const handleStartGenrePractice = (genreId, mode = 'fullTyping') => {
    navigateTo(mode, {
      genre: genreId,
      bookId: null,
      difficulty: 'all',
      clearQuote: true,
      pausedSession: null,
      sessionIdIncrement: true,
    });
  };

  const handleStartBookPractice = (bookId, mode = 'fullTyping', difficulty = 'all') => {
    navigateTo(mode, {
      bookId,
      difficulty,
      clearQuote: true,
      pausedSession: null,
      sessionIdIncrement: true,
    });
  };

  const handleSelectBook = (bookId, gameContext = null) => {
    let paused = null;
    if (['fullTyping', 'clozeRecall', 'wordScramble', 'textDetective', 'firstLetter', 'speedTrio'].includes(currentScreen)) {
      const completedId = gameContext?.quote?.id || activeQuote?.id;
      if (completedId) {
        quoteQueue.markQuotePlayed(completedId);
      }
      paused = {
        mode: currentScreen,
        genre: selectedGenre,
        difficulty: selectedDifficulty,
        bookId: selectedBookId,
        quote: activeQuote,
        completedQuoteId: completedId,
        ...(gameContext || {})
      };
      setPausedGameSession(paused);
    }
    navigateTo('bookDetail', { bookId, pausedSession: paused });
  };

  const handleResumeExercise = () => {
    if (!pausedGameSession) {
      handleGoBack('home');
      return;
    }
    const { mode, genre, difficulty, bookId, completedQuoteId, quote } = pausedGameSession;
    
    // Explicitly mark the completed quote as played so quoteQueue NEVER returns it
    const finishedId = completedQuoteId || quote?.id;
    if (finishedId) {
      quoteQueue.markQuotePlayed(finishedId);
    }

    setPausedGameSession(null);
    navigateTo(mode, {
      genre: genre || 'all',
      difficulty: difficulty || 'all',
      bookId: bookId || null,
      clearQuote: true,
      pausedSession: null,
      sessionIdIncrement: true,
    });
  };

  const handleNavigateHome = () => {
    sounds.playClick();
    navigateTo('home', { clearQuote: true, selectedBookId: null, pausedSession: null });
  };

  const handleToggleSound = () => {
    const active = sounds.toggleSound();
    setIsMuted(!active);
  };

  const handleOpenStats = () => {
    sounds.playClick();
    window.history.pushState({ modal: 'stats', screen: currentScreen, genre: selectedGenre, bookId: selectedBookId }, '', window.location.hash);
    setIsStatsOpen(true);
  };

  const handleCloseStats = () => {
    sounds.playClick();
    setIsStatsOpen(false);
    if (window.history.state?.modal === 'stats') {
      window.history.back();
    }
  };

  const handleOpenTips = () => {
    sounds.playClick();
    window.history.pushState({ modal: 'tips', screen: currentScreen, genre: selectedGenre, bookId: selectedBookId }, '', window.location.hash);
    setIsTipsOpen(true);
  };

  const handleCloseTips = () => {
    sounds.playClick();
    setIsTipsOpen(false);
    if (window.history.state?.modal === 'tips') {
      window.history.back();
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] dark:bg-[#121110] text-[#1C1917] dark:text-[#F5EFE4] flex flex-col justify-between selection:bg-[#C85A32] selection:text-white pb-16 sm:pb-0 font-sans overflow-x-hidden transition-colors duration-200">
      <div>
        {/* Literary Header */}
        <Header
          currentScreen={currentScreen}
          onNavigateHome={handleNavigateHome}
          onOpenStats={handleOpenStats}
          onOpenTips={handleOpenTips}
          onOpenLibrary={() => navigateTo('library')}
          streak={stats.streak}
          isMuted={isMuted}
          onToggleSound={handleToggleSound}
          theme={theme}
          onToggleTheme={handleToggleTheme}
        />

        {/* Dynamic Screen View */}
        <main className="container mx-auto px-2 sm:px-4 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] sm:pb-12">
          {currentScreen === 'home' && (
            <HomeMenu
              stats={stats}
              onSelectMode={(modeId) => {
                navigateTo(modeId, {
                  clearQuote: true,
                  genre: 'all',
                  bookId: null,
                  pausedSession: null,
                  sessionIdIncrement: true,
                });
              }}
              onSelectGenre={(genreId) => {
                navigateTo('genreDetail', {
                  genre: genreId,
                  bookId: null,
                  pausedSession: null,
                });
              }}
              onOpenLibrary={() => navigateTo('library')}
              onStartQuote={handleStartQuotePractice}
              onSelectBook={(bookId) => navigateTo('bookDetail', { bookId })}
            />
          )}

          {currentScreen === 'genreDetail' && (
            <GenreDetailView
              genreId={selectedGenre}
              onBack={() => handleGoBack('home')}
              onStartGenrePractice={handleStartGenrePractice}
              onStartSpecificQuote={handleStartQuotePractice}
              onSelectBook={handleSelectBook}
            />
          )}

          {currentScreen === 'bookDetail' && (
            <BookDetailView
              bookId={selectedBookId}
              pausedGameSession={pausedGameSession}
              onResumeExercise={handleResumeExercise}
              onNavigateHome={handleNavigateHome}
              onSelectGenre={(genreId) => navigateTo('genreDetail', { genre: genreId })}
              onBack={() => {
                if (pausedGameSession) {
                  handleResumeExercise();
                } else {
                  handleGoBack(selectedGenre !== 'all' ? 'genreDetail' : 'home');
                }
              }}
              onStartBookPractice={handleStartBookPractice}
              onStartSpecificQuote={handleStartQuotePractice}
            />
          )}

          {currentScreen === 'fullTyping' && (
            <FullTypingGame
              key={`fullTyping_${gameSessionId}`}
              initialQuote={activeQuote}
              initialGenre={selectedGenre}
              initialBookId={selectedBookId}
              initialDifficulty={selectedDifficulty}
              onGameOver={handleGameOver}
              onSelectBook={handleSelectBook}
              onBack={() => handleGoBack(selectedBookId ? 'bookDetail' : selectedGenre !== 'all' ? 'genreDetail' : 'home')}
              highScore={stats.highScores?.fullTyping || 0}
            />
          )}

          {currentScreen === 'clozeRecall' && (
            <ClozeRecallGame
              key={`clozeRecall_${gameSessionId}`}
              initialQuote={activeQuote}
              initialGenre={selectedGenre}
              initialBookId={selectedBookId}
              initialDifficulty={selectedDifficulty}
              onGameOver={handleGameOver}
              onSelectBook={handleSelectBook}
              onBack={() => handleGoBack(selectedBookId ? 'bookDetail' : selectedGenre !== 'all' ? 'genreDetail' : 'home')}
              highScore={stats.highScores?.clozeRecall || 0}
            />
          )}

          {currentScreen === 'wordScramble' && (
            <WordScrambleGame
              key={`wordScramble_${gameSessionId}`}
              initialQuote={activeQuote}
              initialGenre={selectedGenre}
              initialBookId={selectedBookId}
              initialDifficulty={selectedDifficulty}
              onGameOver={handleGameOver}
              onSelectBook={handleSelectBook}
              onBack={() => handleGoBack(selectedBookId ? 'bookDetail' : selectedGenre !== 'all' ? 'genreDetail' : 'home')}
              highScore={stats.highScores?.wordScramble || 0}
            />
          )}

          {currentScreen === 'textDetective' && (
            <TextDetectiveGame
              key={`textDetective_${gameSessionId}`}
              initialQuote={activeQuote}
              initialGenre={selectedGenre}
              initialBookId={selectedBookId}
              initialDifficulty={selectedDifficulty}
              onGameOver={handleGameOver}
              onSelectBook={handleSelectBook}
              onBack={() => handleGoBack(selectedBookId ? 'bookDetail' : selectedGenre !== 'all' ? 'genreDetail' : 'home')}
              highScore={stats.highScores?.textDetective || 0}
            />
          )}

          {currentScreen === 'firstLetter' && (
            <FirstLetterGame
              key={`firstLetter_${gameSessionId}`}
              initialQuote={activeQuote}
              initialGenre={selectedGenre}
              initialBookId={selectedBookId}
              initialDifficulty={selectedDifficulty}
              onGameOver={handleGameOver}
              onSelectBook={handleSelectBook}
              onBack={() => handleGoBack(selectedBookId ? 'bookDetail' : selectedGenre !== 'all' ? 'genreDetail' : 'home')}
              highScore={stats.highScores?.firstLetter || 0}
            />
          )}

          {currentScreen === 'speedTrio' && (
            <SpeedTrioGame
              key={`speedTrio_${gameSessionId}`}
              onGameOver={handleGameOver}
              onSelectBook={handleSelectBook}
              onBack={() => handleGoBack(selectedBookId ? 'bookDetail' : selectedGenre !== 'all' ? 'genreDetail' : 'home')}
              highScore={stats.highScores?.speedTrio || 0}
            />
          )}

          {currentScreen === 'library' && (
            <MyLibrary
              customQuotes={customQuotes}
              onAddCustomQuote={handleAddCustomQuote}
              onDeleteCustomQuote={handleDeleteCustomQuote}
              onStartPractice={handleStartQuotePractice}
              onBack={() => handleGoBack('home')}
            />
          )}
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <BottomNav
        currentScreen={currentScreen}
        onNavigateHome={handleNavigateHome}
        onOpenPractice={() => navigateTo('fullTyping', { clearQuote: true, bookId: null, sessionIdIncrement: true })}
        onOpenLibrary={() => navigateTo('library')}
        onOpenStats={handleOpenStats}
      />

      {/* Footer */}
      <footer className="w-full text-center py-6 border-t border-[#D6CEBE] dark:border-[#38322B] text-xs text-[#78716C] dark:text-[#A8A196] hidden sm:block">
        <p className="font-serif italic">LibrisMind &copy; 2026 — The Atelier Edition • Edebi Hafıza & Kütüphane Platformu</p>
      </footer>

      {/* Modals */}
      <StatsModal
        isOpen={isStatsOpen}
        onClose={handleCloseStats}
        stats={stats}
      />

      <TipsModal
        isOpen={isTipsOpen}
        onClose={handleCloseTips}
      />
    </div>
  );
}
