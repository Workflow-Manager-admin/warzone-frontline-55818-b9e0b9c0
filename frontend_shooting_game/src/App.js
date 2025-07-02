import React, { useState, useEffect } from 'react';
import './App.css';

// Import new stubs
import Menu from './components/Menu';
import Game3DView from './game/Game3DView';
import HUDOverlay from './hud/HUDOverlay';

/**
 * PUBLIC_INTERFACE
 * Top-level App shell orchestrating theming, state, screen routing, overlays and game view.
 */
function App() {
  // Theme mode (light/dark)
  const [theme, setTheme] = useState('light');

  // Main app view state ("landing", "playing", ...)
  const [screen, setScreen] = useState('landing'); // landing|playing|score|settings etc.
  // Player state (stub, to expand)
  const [playerState, setPlayerState] = useState({
    health: 100,
    weapon: { type: "rifle", ammo: 30, cooldown: false },
    score: 0
  });
  // Game state (stub, to expand)
  const [gameState, setGameState] = useState({});

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Handlers for the main menu
  const handleStart = () => setScreen("playing");
  const handleSettings = () => setScreen("settings");
  const handleExit = () => window.close?.();

  return (
    <div className="App">
      {/* Theme Toggle */}
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>

      {/* Menu Overlays */}
      {(screen === "landing" || screen === "settings") && (
        <Menu
          screen={screen}
          onStart={handleStart}
          onSettings={handleSettings}
          onExit={handleExit}
        />
      )}

      {/* 3D Game View */}
      {screen === "playing" && (
        <>
          <Game3DView
            gameState={gameState}
            setGameState={setGameState}
            // other props: player controls, etc.
          />
          <HUDOverlay
            playerState={playerState}
            gameState={gameState}
          />
        </>
      )}
    </div>
  );
}

export default App;
