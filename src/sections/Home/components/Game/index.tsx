/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from 'react';
import { useInterval } from '../../hooks/useInterval';
import styles from './styles.module.scss';

const GAME_WIDTH = 24;
const GAME_HEIGHT = 40;
const FOOD_COUNT = 10;

const initialStates = {
  score: 0,
  food: { x: 10, y: 5 },
  direction: 'up',
  snake: [
    { x: 10, y: 12 },
    { x: 10, y: 13 },
    { x: 10, y: 14 },
    { x: 10, y: 15 },
    { x: 10, y: 16 },
    { x: 10, y: 17 },
    { x: 10, y: 18 },
    { x: 11, y: 18 },
    { x: 12, y: 18 },
    { x: 13, y: 18 },
    { x: 14, y: 18 },
    { x: 15, y: 18 },
    { x: 15, y: 19 },
    { x: 15, y: 20 },
    { x: 15, y: 21 },
    { x: 15, y: 22 },
    { x: 15, y: 23 },
    { x: 15, y: 24 },
  ],
  gameState: {
    interval: null,
    started: false,
    over: false,
  }
};

export const Corners = () => (
  <>
    {Array.from({ length: 4 }).map((_, index) => (
      <div key={index} className={styles.corner} />
    ))}
  </>
);

export const Instructions = ({
  move
}: {
  move: (key: string) => void
}) => (
  <div className={styles.instructions}>
    <p> // use your keyboard</p>
    <p> // arrows to play</p>
    <div className={styles.buttons}>
      <button className={styles.button} onClick={() => move('up')}>
        <i className="ri-arrow-up-s-fill" />
      </button>
      <div>
        <button className={styles.button} onClick={() => move('left')}>
          <i className="ri-arrow-left-s-fill" />
        </button>
        <button className={styles.button} onClick={() => move('down')}>
          <i className="ri-arrow-down-s-fill" />
        </button>
        <button className={styles.button} onClick={() => move('right')}>
          <i className="ri-arrow-right-s-fill" />
        </button>
      </div>
    </div>
  </div>
);

export const Score = ({
  score
}: {
  score: number
}) => (
  <div className={styles.score}>
    <p> // food left</p>
    <div className={styles.foods}>
      {Array.from({ length: FOOD_COUNT }).map((_, index) => (
        <div key={index} className={[
          styles.food,
          index < score ? styles.active : ''
        ].join(' ')} />
      ))}
    </div>
  </div>
);

export const Game = () => {
  const [score, setScore] = useState(initialStates.score);
  const [food, setFood] = useState(initialStates.food);
  const [direction, setDirection] = useState(initialStates.direction);
  const gameScreenRef = useRef<HTMLDivElement>(null);
  const [snake, setSnake] = useState(initialStates.snake);
  const [gameState, setGameState] = useState(initialStates.gameState);

  const moveSnake = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [head, ...tail] = snake;
    let newX = head.x;
    let newY = head.y;

    switch (direction) {
      case 'up':
        newY--;
        break;
      case 'down':
        newY++;
        break;
      case 'left':
        newX--;
        break;
      case 'right':
        newX++;
        break;
    }

    if (
      newX >= 0 &&
      newX < GAME_WIDTH &&
      newY >= 0 &&
      newY < GAME_HEIGHT &&
      !snake.find((snakeCell) => snakeCell.x === newX && snakeCell.y === newY)
    ) {
      const newSnake = [...snake];
      newSnake.unshift({ x: newX, y: newY });

      if (newX === food.x && newY === food.y) {
        setScore(score + 1);

        if (score + 1 === FOOD_COUNT) {
          newSnake.unshift({ x: newX, y: newY });
          setFood({ x: null, y: null });
          clearInterval(gameState.interval);
          setGameState(prev => ({
            ...prev,
            started: false,
            over: true
          }));
        } else {
          const newFood = {
            x: Math.floor(Math.random() * GAME_WIDTH),
            y: Math.floor(Math.random() * GAME_HEIGHT),
          };
          setFood(newFood);
        }
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    } else {
      clearInterval(gameState.interval);
      setGameState(prev => ({
        ...prev,
        started: false,
        over: true
      }));
    }
  };

  const test = useInterval(moveSnake, gameState.started ? 50 : null);

  function startGame() {
    setGameState(prev => ({
      ...prev,
      started: true,
      interval: test
    }));
  }

  function startAgain() {
    setGameState(initialStates.gameState);
    setScore(initialStates.score);
    setFood(initialStates.food);
    setSnake(initialStates.snake);
    setDirection(initialStates.direction);
    clearInterval(gameState.interval);
    render();
  }

  function render() {
    const CELL_SIZE = window.innerWidth > 1920 ? 10 : 8;
    const gameScreen = gameScreenRef.current;
    if (!gameScreen) return;

    gameScreen.innerHTML = '';

    for (let i = 0; i < GAME_HEIGHT; i++) {
      for (let j = 0; j < GAME_WIDTH; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `${CELL_SIZE}px`;
        cell.style.height = `${CELL_SIZE}px`;
        cell.style.display = 'flex';
        cell.style.flexShrink = '0';
        cell.classList.add('black');

        // Food cell style
        if (j === food.x && i === food.y) {
          cell.style.backgroundColor = '#43D9AD';
          cell.style.borderRadius = '50%';
          cell.style.boxShadow = '0 0 10px #43D9AD';
        }

        // Snake cell style
        const snakeCell = snake.find((snakeCell) => snakeCell.x === j && snakeCell.y === i);
        if (snakeCell) {
          cell.style.backgroundColor = '#43D9AD';
          cell.style.opacity = 1 - snake.indexOf(snakeCell) / snake.length;
          cell.classList.add('green');
        }

        // Head cell style
        if (snakeCell && snake.indexOf(snakeCell) === 0) {
          const headRadius = '5px';
          if (direction === 'up') {
            cell.style.borderTopLeftRadius = headRadius;
            cell.style.borderTopRightRadius = headRadius;
          }
          if (direction === 'down') {
            cell.style.borderBottomLeftRadius = headRadius;
            cell.style.borderBottomRightRadius = headRadius;
          }
          if (direction === 'left') {
            cell.style.borderTopLeftRadius = headRadius;
            cell.style.borderBottomLeftRadius = headRadius;
          }
          if (direction === 'right') {
            cell.style.borderTopRightRadius = headRadius;
            cell.style.borderBottomRightRadius = headRadius;
          }
        }

        // Append the cell to the game screen
        gameScreen.appendChild(cell);
      }
    }
  }

  function move(direction) {
    switch (direction) {
      case 'left':
        if (direction !== 'right') {
          setDirection('left');
        }
        break;
      case 'up':
        if (direction !== 'down') {
          setDirection('up');
        }
        break;
      case 'right':
        if (direction !== 'left') {
          setDirection('right');
        }
        break;
      case 'down':
        if (direction !== 'up') {
          setDirection('down');
        }
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    window.addEventListener('resize', render);
  }, [])

  useEffect(() => {
    function handleKeyDown(event) {
      switch (event.key) {
        case 'ArrowLeft':
          if (direction !== 'right') {
            setDirection('left');
          }
          break;
        case 'ArrowUp':
          if (direction !== 'down') {
            setDirection('up');
          }
          break;
        case 'ArrowRight':
          if (direction !== 'left') {
            setDirection('right');
          }
          break;
        case 'ArrowDown':
          if (direction !== 'up') {
            setDirection('down');
          }
          break;
        case ' ':
          if (gameState.over) {
            startAgain();
          } else {
            startGame();
          }
          break;
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [gameState.started, gameState.over, direction]);

  useEffect(() => {
    render();
  }, [snake]);

  return (
    <div className={styles.console}>
      <Corners />
      <div
        className={styles.gameScreen}
        ref={gameScreenRef}
      />
      <div
        className={[
          styles.gameOver,
          gameState.over ? styles.show : ''
        ].join(' ')}
      >
        <p>GAME OVER!</p>
        <button
          onClick={startAgain}
          type="button"
        >
          start-again
        </button>
      </div>
      <div className={styles.menu}>
        <Instructions move={move} />
        <Score score={score} />
      </div>
      <button
        onClick={startGame}
        className={[
          styles.startButton,
          gameState.started || gameState.over ? styles.hide : ''
        ].join(' ')}
      >
        start-game
      </button>
    </div >
  )
}