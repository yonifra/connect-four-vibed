import React from 'react'
import { GameBoard } from './components/GameBoard'
import { GameStatus } from './components/GameStatus'
import { useGameLogic } from './hooks/useGameLogic'
import './App.css'

function App() {
  const { gameState, dropPiece, resetGame, getLowestEmptyRow } = useGameLogic()

  return (
    <div className="app">
      <GameStatus
        currentPlayer={gameState.currentPlayer}
        winner={gameState.winner}
        isDraw={gameState.isDraw}
        onReset={resetGame}
      />
      <GameBoard
        board={gameState.board}
        currentPlayer={gameState.currentPlayer}
        winningCells={gameState.winningCells}
        onDropPiece={dropPiece}
        getLowestEmptyRow={getLowestEmptyRow}
        isGameOver={gameState.winner !== null || gameState.isDraw}
      />
      <footer className="game-footer">
        <p>Click on a column to drop your piece</p>
        <p>First to connect 4 in a row wins!</p>
      </footer>
    </div>
  )
}

export default App
