import { useState, useCallback } from 'react'
import { GameState, Player, Board, ROWS, COLS, WIN_LENGTH } from '../types/game'

const createEmptyBoard = (): Board => {
  return Array(ROWS)
    .fill(null)
    .map(() => Array(COLS).fill(null))
}

const checkDirection = (
  board: Board,
  row: number,
  col: number,
  dRow: number,
  dCol: number,
  player: Player
): [number, number][] => {
  const cells: [number, number][] = []

  for (let i = 0; i < WIN_LENGTH; i++) {
    const newRow = row + i * dRow
    const newCol = col + i * dCol

    if (
      newRow < 0 ||
      newRow >= ROWS ||
      newCol < 0 ||
      newCol >= COLS ||
      board[newRow][newCol] !== player
    ) {
      return []
    }
    cells.push([newRow, newCol])
  }

  return cells
}

const checkWinner = (board: Board, player: Player): [number, number][] => {
  const directions = [
    [0, 1], // horizontal
    [1, 0], // vertical
    [1, 1], // diagonal down-right
    [1, -1], // diagonal down-left
  ]

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      for (const [dRow, dCol] of directions) {
        const winningCells = checkDirection(board, row, col, dRow, dCol, player)
        if (winningCells.length === WIN_LENGTH) {
          return winningCells
        }
      }
    }
  }

  return []
}

const checkDraw = (board: Board): boolean => {
  return board[0].every((cell) => cell !== null)
}

const initialState: GameState = {
  board: createEmptyBoard(),
  currentPlayer: 'red',
  winner: null,
  isDraw: false,
  winningCells: [],
}

export const useGameLogic = () => {
  const [gameState, setGameState] = useState<GameState>(initialState)

  const dropPiece = useCallback((col: number) => {
    setGameState((prevState) => {
      if (prevState.winner || prevState.isDraw) {
        return prevState
      }

      // Find the lowest empty row in the column
      let targetRow = -1
      for (let row = ROWS - 1; row >= 0; row--) {
        if (prevState.board[row][col] === null) {
          targetRow = row
          break
        }
      }

      // Column is full
      if (targetRow === -1) {
        return prevState
      }

      // Create new board with the piece
      const newBoard = prevState.board.map((row) => [...row])
      newBoard[targetRow][col] = prevState.currentPlayer

      // Check for winner
      const winningCells = checkWinner(newBoard, prevState.currentPlayer)
      if (winningCells.length > 0) {
        return {
          ...prevState,
          board: newBoard,
          winner: prevState.currentPlayer,
          winningCells,
        }
      }

      // Check for draw
      if (checkDraw(newBoard)) {
        return {
          ...prevState,
          board: newBoard,
          isDraw: true,
        }
      }

      // Switch player
      return {
        ...prevState,
        board: newBoard,
        currentPlayer: prevState.currentPlayer === 'red' ? 'yellow' : 'red',
      }
    })
  }, [])

  const resetGame = useCallback(() => {
    setGameState(initialState)
  }, [])

  const getLowestEmptyRow = useCallback(
    (col: number): number => {
      for (let row = ROWS - 1; row >= 0; row--) {
        if (gameState.board[row][col] === null) {
          return row
        }
      }
      return -1
    },
    [gameState.board]
  )

  return {
    gameState,
    dropPiece,
    resetGame,
    getLowestEmptyRow,
  }
}
