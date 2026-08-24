import React, { useState, useEffect } from 'react';
import Header from './components/common/Header';
import BottomNav from './components/common/BottomNav';
import StatsModal from './components/common/StatsModal';
import TipsModal from './components/common/TipsModal';
import HomeMenu from './components/HomeMenu';
import FullTypingGame from './components/games/FullTypingGame';
import ClozeRecallGame from './components/games/ClozeRecallGame';
import WordScrambleGame from './components/games/WordScrambleGame';
import MyLibrary from './components/MyLibrary';
import { getSavedStats, saveGameResult, getCustomQuotes, saveCustomQuotes } from './utils/storage';
import { sounds } from './utils/sound';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home'); // 'home' | 'fullTyping' | 'clozeRecall' | 'wordScramble' | 'library'
  const [stats, setStats] = useState(getSavedStats());
  const [customQuotes, setCustomQuotes] = useState(getCustomQuotes());
  const [activeQuote, setActiveQuote] = useState(null);
  
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isTipsOpen, setIsTipsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setStats(getSavedStats());
    setCustomQuotes(getCustomQuotes());
  }, []);

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

  const handleStartQuotePractice = (quote) => {
    setActiveQuote(quote);
    setCurrentScreen('fullTyping');
  };

  const handleToggleSound = () => {
    const active = sounds.toggleSound();
    setIsMuted(!active);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-amber-500 selection:text-slate-950 pb-16 sm:pb-0 font-sans overflow-x-hidden">
      <div>
        {/* Literary Header */}
        <Header
          currentScreen={currentScreen}
          onNavigateHome={() => {
            sounds.playClick();
            setActiveQuote(null);
            setCurrentScreen('home');
          }}
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
        />

        {/* Dynamic Screen View */}
        <main className="container mx-auto px-2 sm:px-4 pb-12">
          {currentScreen === 'home' && (
            <HomeMenu
              stats={stats}
              onSelectMode={(modeId) => {
                setActiveQuote(null);
                setCurrentScreen(modeId);
              }}
              onSelectGenre={(genreId) => {
                setActiveQuote(null);
                setCurrentScreen('fullTyping');
              }}
              onOpenLibrary={() => setCurrentScreen('library')}
              onStartQuote={handleStartQuotePractice}
            />
          )}

          {currentScreen === 'fullTyping' && (
            <FullTypingGame
              initialQuote={activeQuote}
              onGameOver={handleGameOver}
              onBack={() => {
                setActiveQuote(null);
                setCurrentScreen('home');
              }}
              highScore={stats.highScores?.fullTyping || 0}
            />
          )}

          {currentScreen === 'clozeRecall' && (
            <ClozeRecallGame
              onGameOver={handleGameOver}
              onBack={() => {
                setActiveQuote(null);
                setCurrentScreen('home');
              }}
              highScore={stats.highScores?.clozeRecall || 0}
            />
          )}

          {currentScreen === 'wordScramble' && (
            <WordScrambleGame
              onGameOver={handleGameOver}
              onBack={() => {
                setActiveQuote(null);
                setCurrentScreen('home');
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
          setCurrentScreen('home');
        }}
        onOpenPractice={() => {
          setActiveQuote(null);
          setCurrentScreen('fullTyping');
        }}
        onOpenLibrary={() => setCurrentScreen('library')}
        onOpenStats={() => setIsStatsOpen(true)}
      />

      {/* Footer */}
      <footer className="w-full text-center py-6 border-t border-slate-900/80 text-xs text-slate-500 hidden sm:block">
        <p className="font-serif">LibrisMind &copy; 2026 — Edebi Hafıza & Kitap Cümlesi Ezberleme Platformu</p>
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
