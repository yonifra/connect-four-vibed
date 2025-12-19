import React, { useState } from 'react'
import { Board, Player, ROWS, COLS } from '../types/game'
import './GameBoard.css'

interface GameBoardProps {
  board: Board
  currentPlayer: Player
  winningCells: [number, number][]
  onDropPiece: (col: number) => void
  getLowestEmptyRow: (col: number) => number
  isGameOver: boolean
}

export const GameBoard: React.FC<GameBoardProps> = ({
  board,
  currentPlayer,
  winningCells,
  onDropPiece,
  getLowestEmptyRow,
  isGameOver,
}) => {
  const [hoverCol, setHoverCol] = useState<number | null>(null)

  const isWinningCell = (row: number, col: number): boolean => {
    return winningCells.some(([r, c]) => r === row && c === col)
  }

  const handleColumnClick = (col: number) => {
    if (!isGameOver && getLowestEmptyRow(col) !== -1) {
      onDropPiece(col)
    }
  }

  const getPreviewRow = (col: number): number | null => {
    if (isGameOver) return null
    return getLowestEmptyRow(col)
  }

  return (
    <div className="game-board-container">
      <div className="game-board">
        {/* Column hover indicators */}
        <div className="column-indicators">
          {Array(COLS)
            .fill(null)
            .map((_, col) => (
              <div
                key={col}
                className={`column-indicator ${
                  hoverCol === col && !isGameOver ? 'active' : ''
                } ${currentPlayer}`}
                onMouseEnter={() => setHoverCol(col)}
                onMouseLeave={() => setHoverCol(null)}
                onClick={() => handleColumnClick(col)}
              >
                <div className="preview-piece" />
              </div>
            ))}
        </div>

        {/* Board grid */}
        <div className="board-grid">
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="board-row">
              {row.map((cell, colIndex) => {
                const previewRow =
                  hoverCol === colIndex ? getPreviewRow(colIndex) : null
                const showPreview = previewRow === rowIndex && !cell

                return (
                  <div
                    key={colIndex}
                    className={`cell ${
                      isWinningCell(rowIndex, colIndex) ? 'winning' : ''
                    }`}
                    onMouseEnter={() => setHoverCol(colIndex)}
                    onMouseLeave={() => setHoverCol(null)}
                    onClick={() => handleColumnClick(colIndex)}
                  >
                    <div
                      className={`piece ${cell || ''} ${
                        showPreview ? `preview ${currentPlayer}` : ''
                      } ${cell ? 'dropped' : ''}`}
                    />
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
