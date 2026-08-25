import React, { useState, useEffect } from 'react';
import Header from './components/common/Header';
import BottomNav from './components/common/BottomNav';
import StatsModal from './components/common/StatsModal';
import TipsModal from './components/common/TipsModal';
import HomeMenu from './components/HomeMenu';
import GenreDetailView from './components/GenreDetailView';
import FullTypingGame from './components/games/FullTypingGame';
import ClozeRecallGame from './components/games/ClozeRecallGame';
import WordScrambleGame from './components/games/WordScrambleGame';
import MyLibrary from './components/MyLibrary';
import { getSavedStats, saveGameResult, getCustomQuotes, saveCustomQuotes } from './utils/storage';
import { sounds } from './utils/sound';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home'); // 'home' | 'genreDetail' | 'fullTyping' | 'clozeRecall' | 'wordScramble' | 'library'
  const [selectedGenre, setSelectedGenre] = useState('all');
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

  const handleStartQuotePractice = (quote, mode = 'fullTyping') => {
    setActiveQuote(quote);
    setCurrentScreen(mode);
  };

  const handleStartGenrePractice = (genreId, mode = 'fullTyping') => {
    setSelectedGenre(genreId);
    setActiveQuote(null);
    setCurrentScreen(mode);
  };

  const handleToggleSound = () => {
    const active = sounds.toggleSound();
    setIsMuted(!active);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#1C1917] flex flex-col justify-between selection:bg-[#C85A32] selection:text-white pb-16 sm:pb-0 font-sans overflow-x-hidden">
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
                setSelectedGenre('all');
                setCurrentScreen(modeId);
              }}
              onSelectGenre={(genreId) => {
                setSelectedGenre(genreId);
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
            />
          )}

          {currentScreen === 'fullTyping' && (
            <FullTypingGame
              initialQuote={activeQuote}
              initialGenre={selectedGenre}
              onGameOver={handleGameOver}
              onBack={() => {
                setActiveQuote(null);
                setCurrentScreen(selectedGenre !== 'all' ? 'genreDetail' : 'home');
              }}
              highScore={stats.highScores?.fullTyping || 0}
            />
          )}

          {currentScreen === 'clozeRecall' && (
            <ClozeRecallGame
              initialQuote={activeQuote}
              initialGenre={selectedGenre}
              onGameOver={handleGameOver}
              onBack={() => {
                setActiveQuote(null);
                setCurrentScreen(selectedGenre !== 'all' ? 'genreDetail' : 'home');
              }}
              highScore={stats.highScores?.clozeRecall || 0}
            />
          )}

          {currentScreen === 'wordScramble' && (
            <WordScrambleGame
              initialQuote={activeQuote}
              initialGenre={selectedGenre}
              onGameOver={handleGameOver}
              onBack={() => {
                setActiveQuote(null);
                setCurrentScreen(selectedGenre !== 'all' ? 'genreDetail' : 'home');
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
      <footer className="w-full text-center py-6 border-t border-[#D6CEBE] text-xs text-[#78716C] hidden sm:block">
        <p className="font-serif italic">LibrisMind &copy; 2026 — The Atelier Edition • Edebi Hafıza Platformu</p>
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
