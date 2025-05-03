import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SPEED = 150;

const SnakeGame = ({ isVisible, onClose }) => {
  const [snake, setSnake] = useState([[10, 10]]);
  const [food, setFood] = useState([15, 15]);
  const [direction, setDirection] = useState('RIGHT');
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const generateFood = useCallback(() => {
    const newFood = [
      Math.floor(Math.random() * GRID_SIZE),
      Math.floor(Math.random() * GRID_SIZE),
    ];
    return newFood;
  }, []);

  const resetGame = () => {
    setSnake([[10, 10]]);
    setFood(generateFood());
    setDirection('RIGHT');
    setScore(0);
    setGameOver(false);
    setIsPaused(false);
  };

  const moveSnake = useCallback(() => {
    if (gameOver || isPaused) return;

    setSnake((prevSnake) => {
      const newSnake = [...prevSnake];
      const head = [...newSnake[0]];

      switch (direction) {
        case 'UP':
          head[1] -= 1;
          break;
        case 'DOWN':
          head[1] += 1;
          break;
        case 'LEFT':
          head[0] -= 1;
          break;
        case 'RIGHT':
          head[0] += 1;
          break;
        default:
          break;
      }

      // Check collision with walls
      if (
        head[0] < 0 ||
        head[0] >= GRID_SIZE ||
        head[1] < 0 ||
        head[1] >= GRID_SIZE
      ) {
        setGameOver(true);
        return prevSnake;
      }

      // Check collision with self
      if (
        newSnake.some(
          (segment) => segment[0] === head[0] && segment[1] === head[1]
        )
      ) {
        setGameOver(true);
        return prevSnake;
      }

      newSnake.unshift(head);

      // Check if food is eaten
      if (head[0] === food[0] && head[1] === food[1]) {
        setScore((prev) => prev + 1);
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameOver, isPaused, generateFood]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
        case ' ':
          setIsPaused((prev) => !prev);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction]);

  useEffect(() => {
    if (!isVisible) return;

    const gameInterval = setInterval(moveSnake, INITIAL_SPEED);
    return () => clearInterval(gameInterval);
  }, [isVisible, moveSnake]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/90 p-4 rounded-lg shadow-lg z-50"
        >
          <div className="flex justify-between items-center mb-4">
            <div className="text-green-400 font-mono">Score: {score}</div>
            <button
              onClick={onClose}
              className="text-white hover:text-red-400"
            >
              ×
            </button>
          </div>
          <div
            className="relative bg-gray-900"
            style={{
              width: GRID_SIZE * CELL_SIZE,
              height: GRID_SIZE * CELL_SIZE,
            }}
          >
            {snake.map((segment, index) => (
              <div
                key={index}
                className="absolute bg-green-400"
                style={{
                  width: CELL_SIZE,
                  height: CELL_SIZE,
                  left: segment[0] * CELL_SIZE,
                  top: segment[1] * CELL_SIZE,
                }}
              />
            ))}
            <div
              className="absolute bg-red-500"
              style={{
                width: CELL_SIZE,
                height: CELL_SIZE,
                left: food[0] * CELL_SIZE,
                top: food[1] * CELL_SIZE,
              }}
            />
          </div>
          {gameOver && (
            <div className="mt-4 text-center">
              <div className="text-red-400 mb-2">Game Over!</div>
              <button
                onClick={resetGame}
                className="bg-green-400 text-black px-4 py-2 rounded hover:bg-green-500"
              >
                Play Again
              </button>
            </div>
          )}
          <div className="mt-4 text-center text-sm text-gray-400">
            Use arrow keys to move, space to pause
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SnakeGame; 