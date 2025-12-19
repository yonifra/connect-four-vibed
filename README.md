# 🔴🟡 Connect Four

![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)

A classic Connect Four game built with React and TypeScript. Challenge a friend to drop colored discs into a 7-column, 6-row grid and be the first to connect four in a row!

## ✨ Features

- 🎮 **Two-player gameplay** - Red vs Yellow, taking turns
- 🎯 **Win detection** - Horizontal, vertical, and diagonal win checking
- ✨ **Winning animation** - Highlights the winning four pieces
- 👆 **Interactive UI** - Hover preview shows where your piece will land
- 🔄 **Easy reset** - Start a new game anytime
- 📱 **Responsive design** - Play on any device
- 🎨 **Modern styling** - Clean and intuitive interface

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd connect-four
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 How to Play

1. **Red** always goes first
2. Click on any column to drop your piece
3. Pieces fall to the lowest available position in the column
4. Connect **4 pieces** in a row (horizontally, vertically, or diagonally) to win!
5. If the board fills up with no winner, it's a draw
6. Click "New Game" to start over

## 🏗️ Project Structure

```
connect-four/
├── src/
│   ├── components/
│   │   ├── GameBoard.tsx      # Game board grid component
│   │   ├── GameBoard.css      # Board styling
│   │   ├── GameStatus.tsx     # Current player/winner display
│   │   └── GameStatus.css     # Status styling
│   ├── hooks/
│   │   └── useGameLogic.ts    # Game state management & logic
│   ├── types/
│   │   └── game.ts            # TypeScript type definitions
│   ├── App.tsx                # Main application component
│   ├── App.css                # App-level styling
│   └── index.css              # Global styles
├── package.json
└── README.md
```

## 🛠️ Tech Stack

| Technology           | Purpose              |
| -------------------- | -------------------- |
| **React 19**         | UI framework         |
| **TypeScript**       | Type safety          |
| **CSS3**             | Styling & animations |
| **Create React App** | Build tooling        |

## 📜 Available Scripts

| Command         | Description            |
| --------------- | ---------------------- |
| `npm start`     | Run development server |
| `npm test`      | Run test suite         |
| `npm run build` | Build for production   |
| `npm run eject` | Eject from CRA         |

## 🎮 Game Rules

- **Board Size**: 7 columns × 6 rows
- **Players**: Red and Yellow
- **Win Condition**: Connect 4 pieces in a row
- **Valid Connections**: Horizontal, Vertical, Diagonal

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ using React & TypeScript
</p>
