import React, { useState, useEffect } from 'react';
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
import MyLibrary from './components/MyLibrary';
import { getSavedStats, saveGameResult, getCustomQuotes, saveCustomQuotes, getSavedTheme, saveTheme } from './utils/storage';
import { quoteQueue } from './utils/quoteQueue';
import { sounds } from './utils/sound';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home'); // 'home' | 'genreDetail' | 'bookDetail' | 'fullTyping' | 'clozeRecall' | 'wordScramble' | 'library'
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedBookId, setSelectedBookId] = useState(null);
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
    setPausedGameSession(null);
    if (quote?.id) {
      quoteQueue.markQuotePlayed(quote.id);
    }
    setActiveQuote(quote);
    setGameSessionId(prev => prev + 1);
    setCurrentScreen(mode);
  };

  const handleStartGenrePractice = (genreId, mode = 'fullTyping') => {
    setPausedGameSession(null);
    setSelectedGenre(genreId);
    setSelectedBookId(null);
    setSelectedDifficulty('all');
    setActiveQuote(null);
    setGameSessionId(prev => prev + 1);
    setCurrentScreen(mode);
  };

  const handleStartBookPractice = (bookId, mode = 'fullTyping', difficulty = 'all') => {
    setPausedGameSession(null);
    setSelectedBookId(bookId);
    setSelectedDifficulty(difficulty);
    setActiveQuote(null);
    setGameSessionId(prev => prev + 1);
    setCurrentScreen(mode);
  };

  const handleSelectBook = (bookId, gameContext = null) => {
    if (['fullTyping', 'clozeRecall', 'wordScramble'].includes(currentScreen)) {
      const completedId = gameContext?.quote?.id || activeQuote?.id;
      if (completedId) {
        quoteQueue.markQuotePlayed(completedId);
      }
      setPausedGameSession({
        mode: currentScreen,
        genre: selectedGenre,
        difficulty: selectedDifficulty,
        bookId: selectedBookId,
        quote: activeQuote,
        completedQuoteId: completedId,
        ...(gameContext || {})
      });
    }
    setSelectedBookId(bookId);
    setCurrentScreen('bookDetail');
  };

  const handleResumeExercise = () => {
    if (!pausedGameSession) return;
    const { mode, genre, difficulty, bookId, completedQuoteId, quote } = pausedGameSession;
    
    // Explicitly mark the completed quote as played so quoteQueue NEVER returns it
    const finishedId = completedQuoteId || quote?.id;
    if (finishedId) {
      quoteQueue.markQuotePlayed(finishedId);
    }

    setSelectedGenre(genre || 'all');
    setSelectedDifficulty(difficulty || 'all');
    setSelectedBookId(bookId || null);
    setActiveQuote(null); // Force brand new unplayed quote
    setGameSessionId(prev => prev + 1); // Force fresh component mount
    setCurrentScreen(mode);
    setPausedGameSession(null);
  };

  const handleNavigateHome = () => {
    sounds.playClick();
    setActiveQuote(null);
    setSelectedBookId(null);
    setPausedGameSession(null);
    setCurrentScreen('home');
  };

  const handleToggleSound = () => {
    const active = sounds.toggleSound();
    setIsMuted(!active);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] dark:bg-[#121110] text-[#1C1917] dark:text-[#F5EFE4] flex flex-col justify-between selection:bg-[#C85A32] selection:text-white pb-16 sm:pb-0 font-sans overflow-x-hidden transition-colors duration-200">
      <div>
        {/* Literary Header */}
        <Header
          currentScreen={currentScreen}
          onNavigateHome={handleNavigateHome}
          onOpenStats={() => {
            sounds.playClick();
            setIsStatsOpen(true);
          }}
          onOpenTips={() => {
            sounds.playClick();
            setIsTipsOpen(true);
          }}
          onOpenLibrary={() => {
            sounds.playClick();
            setCurrentScreen('library');
          }}
          streak={stats.streak}
          isMuted={isMuted}
          onToggleSound={handleToggleSound}
          theme={theme}
          onToggleTheme={handleToggleTheme}
        />

        {/* Dynamic Screen View */}
        <main className="container mx-auto px-2 sm:px-4 pb-12">
          {currentScreen === 'home' && (
            <HomeMenu
              stats={stats}
              onSelectMode={(modeId) => {
                setActiveQuote(null);
                setSelectedGenre('all');
                setSelectedBookId(null);
                setPausedGameSession(null);
                setGameSessionId(prev => prev + 1);
                setCurrentScreen(modeId);
              }}
              onSelectGenre={(genreId) => {
                setSelectedGenre(genreId);
                setSelectedBookId(null);
                setPausedGameSession(null);
                setCurrentScreen('genreDetail');
              }}
              onOpenLibrary={() => setCurrentScreen('library')}
              onStartQuote={handleStartQuotePractice}
            />
          )}

          {currentScreen === 'genreDetail' && (
            <GenreDetailView
              genreId={selectedGenre}
              onBack={() => setCurrentScreen('home')}
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
              onBack={() => {
                if (pausedGameSession) {
                  handleResumeExercise();
                } else if (selectedGenre !== 'all') {
                  setCurrentScreen('genreDetail');
                } else {
                  setCurrentScreen('home');
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
              onBack={() => {
                setActiveQuote(null);
                if (selectedBookId) {
                  setCurrentScreen('bookDetail');
                } else if (selectedGenre !== 'all') {
                  setCurrentScreen('genreDetail');
                } else {
                  setCurrentScreen('home');
                }
              }}
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
              onBack={() => {
                setActiveQuote(null);
                if (selectedBookId) {
                  setCurrentScreen('bookDetail');
                } else if (selectedGenre !== 'all') {
                  setCurrentScreen('genreDetail');
                } else {
                  setCurrentScreen('home');
                }
              }}
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
              onBack={() => {
                setActiveQuote(null);
                if (selectedBookId) {
                  setCurrentScreen('bookDetail');
                } else if (selectedGenre !== 'all') {
                  setCurrentScreen('genreDetail');
                } else {
                  setCurrentScreen('home');
                }
              }}
              highScore={stats.highScores?.wordScramble || 0}
            />
          )}

          {currentScreen === 'library' && (
            <MyLibrary
              customQuotes={customQuotes}
              onAddCustomQuote={handleAddCustomQuote}
              onDeleteCustomQuote={handleDeleteCustomQuote}
              onStartPractice={handleStartQuotePractice}
              onBack={() => setCurrentScreen('home')}
            />
          )}
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <BottomNav
        currentScreen={currentScreen}
        onNavigateHome={() => {
          setActiveQuote(null);
          setSelectedBookId(null);
          setCurrentScreen('home');
        }}
        onOpenPractice={() => {
          setActiveQuote(null);
          setSelectedBookId(null);
          setCurrentScreen('fullTyping');
        }}
        onOpenLibrary={() => setCurrentScreen('library')}
        onOpenStats={() => setIsStatsOpen(true)}
      />

      {/* Footer */}
      <footer className="w-full text-center py-6 border-t border-[#D6CEBE] text-xs text-[#78716C] hidden sm:block">
        <p className="font-serif italic">LibrisMind &copy; 2026 — The Atelier Edition • Edebi Hafıza & Kütüphane Platformu</p>
      </footer>

      {/* Modals */}
      <StatsModal
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        stats={stats}
      />

      <TipsModal
        isOpen={isTipsOpen}
        onClose={() => setIsTipsOpen(false)}
      />
    </div>
  );
}
