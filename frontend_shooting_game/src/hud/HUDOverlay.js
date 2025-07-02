import React from 'react';

/**
 * PUBLIC_INTERFACE
 * HUD overlay displaying player stats, ammo, health, weapon, score, etc.
 */
function HUDOverlay({ playerState, gameState }) {
  // TODO: Expand with actual UI, integrate with player state and game state
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      pointerEvents: "none",
      zIndex: 10,
      color: "#fff"
    }}>
      <div style={{ padding: '8px', background: 'rgba(40, 44, 52, 0.6)', borderRadius: 8, margin: 12, display: "inline-block" }}>
        <span>HUD (Health: {playerState?.health ?? 'N/A'})</span>
        <span style={{ marginLeft: 16 }}>Ammo: {playerState?.weapon?.ammo ?? 'N/A'}</span>
        <span style={{ marginLeft: 16 }}>Score: {playerState?.score ?? 0}</span>
      </div>
    </div>
  );
}

export default HUDOverlay;
