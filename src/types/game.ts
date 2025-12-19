export type Player = 'red' | 'yellow'
export type Cell = Player | null
export type Board = Cell[][]

export interface GameState {
  board: Board
  currentPlayer: Player
  winner: Player | null
  isDraw: boolean
  winningCells: [number, number][]
}

export const ROWS = 6
export const COLS = 7
export const WIN_LENGTH = 4
