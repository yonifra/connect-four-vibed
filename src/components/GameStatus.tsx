import React from 'react'
import { Player } from '../types/game'
import './GameStatus.css'

interface GameStatusProps {
  currentPlayer: Player
  winner: Player | null
  isDraw: boolean
  onReset: () => void
}

export const GameStatus: React.FC<GameStatusProps> = ({
  currentPlayer,
  winner,
  isDraw,
  onReset,
}) => {
  const getStatusMessage = () => {
    if (winner) {
      return (
        <span className={`winner-message ${winner}`}>
          <span className="winner-piece" /> wins! 🎉
        </span>
      )
    }
    if (isDraw) {
      return <span className="draw-message">It's a draw! 🤝</span>
    }
    return (
      <span className={`turn-message ${currentPlayer}`}>
        <span className="current-piece" />
        's turn
      </span>
    )
  }

  return (
    <div className="game-status">
      <h1 className="game-title">Connect Four</h1>
      <div className="status-message">{getStatusMessage()}</div>
      <button className="reset-button" onClick={onReset}>
        {winner || isDraw ? 'Play Again' : 'Restart Game'}
      </button>
    </div>
  )
}
