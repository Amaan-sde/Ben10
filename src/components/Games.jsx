import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Games.css";
import Quiz from "./Quiz";
import OmnitrixPuzzle from "./OmnitrixPuzzle";
import AlienBattleground from "./AlienBattleground";
import Navbar from "./Navbar";

const Games = ({ onNavigate }) => {
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    {
      id: "quiz",
      name: "Ben 10 Ultimate Quiz",
      description: "Test your knowledge about Ben 10 characters and their incredible stories!",
      icon: "🧬",
      difficulty: "Medium",
      questions: 20,
    },
    {
      id: "omnitrix",
      name: "Omnitrix Puzzle",
      description: "Solve challenging puzzles to unlock alien powers.",
      icon: "🧩",
      difficulty: "Hard",
    },
    {
      id: "battleground",
      name: "Alien Battleground",
      description: "Battle against enemies using different alien transformations!",
      icon: "⚡",
      difficulty: "Expert",
    },
  ];

  if (selectedGame) {
    let Component = null;
    if (selectedGame === "quiz") Component = Quiz;
    if (selectedGame === "omnitrix") Component = OmnitrixPuzzle;
    if (selectedGame === "battleground") Component = AlienBattleground;

    return (
      <div className="games-play">
        <Navbar onNavigate={onNavigate} />
        <div style={{ maxWidth: 1200, margin: "60px auto", padding: 20 }}>
          <motion.button
            className="back-btn"
            onClick={() => setSelectedGame(null)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ marginBottom: 18 }}
          >
            ← Back to Games
          </motion.button>
          {Component && <Component onBack={() => setSelectedGame(null)} onNavigate={onNavigate} />}
        </div>
      </div>
    );
  }

  return (
    <div className="games-container">
      <Navbar onNavigate={onNavigate} />

      <motion.div
        className="games-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1>🎮 Ben 10 Game Zone</h1>
        <p>Choose your game and prove your Ben 10 mastery!</p>
      </motion.div>

      <div className="games-grid">
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            className={`game-card ${game.status ? "disabled" : ""}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={!game.status ? { scale: 1.05, y: -10 } : {}}
            onClick={() => !game.status && setSelectedGame(game.id)}
          >
            <motion.div
              className="game-icon"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              whileHover={!game.status ? { scale: 1.2 } : {}}
            >
              {game.icon}
            </motion.div>

            <h3>{game.name}</h3>
            <p className="game-description">{game.description}</p>

            <div className="game-stats">
              <span className="stat">
                <span className="label">Difficulty:</span>
                <span className="value">{game.difficulty}</span>
              </span>
              {game.questions && (
                <span className="stat">
                  <span className="label">Questions:</span>
                  <span className="value">{game.questions}</span>
                </span>
              )}
            </div>

            {game.status ? (
              <div className="coming-soon">
                <span>{game.status}</span>
              </div>
            ) : (
              <motion.button
                className="play-btn"
                whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(0, 255, 136, 0.8)" }}
                whileTap={{ scale: 0.95 }}
              >
                Play Now
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>

      <div className="how-to-play" style={{ maxWidth: 1200, margin: '30px auto', display: 'flex', gap: 20 }}>
        <div style={{ flex: 1, background: 'rgba(0,0,0,0.45)', padding: 18, borderRadius: 12, border: '1px solid rgba(0,255,136,0.06)' }}>
          <h3>How to Play</h3>
          <ul>
            <li><strong>Quiz:</strong> Answer 20 multiple-choice questions. Immediate feedback is shown; finish to see your score.</li>
            <li><strong>Omnitrix Puzzle:</strong> Click tiles adjacent to the empty slot to slide them. Shuffle to start a new puzzle. Restore the sequence to win.</li>
            <li><strong>Alien Battleground:</strong> Click enemies to shoot them. Use <em>Special</em> to deal area damage. Reset to restart the battle. Watch your HP!</li>
          </ul>
        </div>
        <div style={{ width: 360, background: 'rgba(255,255,255,0.02)', padding: 18, borderRadius: 12, border: '1px solid rgba(0,255,136,0.04)' }}>
          <h4>Tips</h4>
          <ol>
            <li>Use special attacks when multiple enemies are present.</li>
            <li>For the puzzle, think ahead and avoid undoing moves.</li>
            <li>In the quiz, read carefully — some questions are tricky!</li>
          </ol>
        </div>
      </div>

      <motion.div
        className="games-footer"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <p>More games coming soon! Stay tuned for epic Ben 10 adventures! 🚀</p>
      </motion.div>
    </div>
  );
};

export default Games;
