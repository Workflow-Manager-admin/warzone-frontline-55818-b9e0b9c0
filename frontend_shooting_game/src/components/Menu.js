import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Menu overlay for game landing/start, character select, gun select, etc.
 */
function Menu({ screen, onStart, onSettings, onExit }) {
  // Expand with animated transitions and additional screens.
  if (screen === "landing") {
    return (
      <div style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(20,30,40,0.75)",
        color: "#fff"
      }}>
        <h1 style={{
          fontFamily: "Impact, sans-serif",
          fontSize: "3rem",
          letterSpacing: "2px"
        }}>WARZONE FRONTLINE</h1>
        <button style={btnStyle} onClick={onStart}>Start Game</button>
        <button style={btnStyle} onClick={onSettings}>Settings</button>
        <button style={{ ...btnStyle, background: "#e04747" }} onClick={onExit}>Exit</button>
      </div>
    );
  }
  // Stub for other screens
  return null;
}

const btnStyle = {
  fontSize: "1.2rem",
  margin: "12px",
  padding: "18px 48px",
  borderRadius: "8px",
  border: "none",
  fontWeight: "bold",
  background: "#233e4d",
  color: "#fff",
  cursor: "pointer",
  letterSpacing: "1px"
};

export default Menu;
