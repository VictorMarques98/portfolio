import styles from './styles.module.scss';

export const Game = () => {
  // const [gameStarted, setGameStarted] = useState(false);
  // const [gameOver, setGameOver] = useState(false);
  // const [gameInterval, setGameInterval] = useState(null);
  // const [score, setScore] = useState(0);
  // const [food, setFood] = useState({ x: 10, y: 5 });
  // const [snake, setSnake] = useState([
  //   { x: 10, y: 12 },
  //   { x: 10, y: 13 },
  //   { x: 10, y: 14 },
  //   { x: 10, y: 15 },
  //   { x: 10, y: 16 },
  //   { x: 10, y: 17 },
  //   { x: 10, y: 18 },
  //   { x: 11, y: 18 },
  //   { x: 12, y: 18 },
  //   { x: 13, y: 18 },
  //   { x: 14, y: 18 },
  //   { x: 15, y: 18 },
  //   { x: 15, y: 19 },
  //   { x: 15, y: 20 },
  //   { x: 15, y: 21 },
  //   { x: 15, y: 22 },
  //   { x: 15, y: 23 },
  //   { x: 15, y: 24 },
  // ]);
  // const [direction, setDirection] = useState('up');
  // const startButtonRef = useRef<HTMLButtonElement>(null);
  // const gameScreenRef = useRef<HTMLDivElement>(null);

  // function render() {
  //   let gameScreen = gameScreenRef.current;
  //   if (!gameScreen) return;

  //   gameScreen.innerHTML = '';
  //   const cellSize = window.innerWidth > 1536 ? "10px" : "8px";
  //   for (let i = 0; i < 40; i++) {
  //     for (let j = 0; j < 24; j++) {
  //       let cell = document.createElement("div");
  //       cell.classList.add("cell");
  //       cell.style.width = cellSize
  //       cell.style.height = cellSize
  //       cell.style.display = "flex";
  //       cell.style.flexShrink = 0;
  //       cell.classList.add("black");

  //       if (j === food.x && i === food.y) {
  //         cell.style.backgroundColor = "#43D9AD";
  //         cell.style.borderRadius = "50%";
  //         cell.style.boxShadow = "0 0 10px #43D9AD";
  //       }

  //       let snakeCell = snake.find(
  //         snakeCell => snakeCell.x === j && snakeCell.y === i
  //       );

  //       if (snakeCell) {
  //         cell.style.backgroundColor = "#43D9AD";
  //         cell.style.opacity = 1 - (snake.indexOf(snakeCell) / snake.length);
  //         cell.classList.add("green");
  //       }

  //       if (snakeCell && snake.indexOf(snakeCell) === 0) {
  //         let headRadius = "5px";
  //         if (direction === "up") {
  //           cell.style.borderTopLeftRadius = headRadius;
  //           cell.style.borderTopRightRadius = headRadius;
  //         }
  //         if (direction === "down") {

  //           cell.style.borderBottomLeftRadius = headRadius;
  //           cell.style.borderBottomRightRadius = headRadius;
  //         }
  //         if (direction === "left") {
  //           cell.style.borderTopLeftRadius = headRadius;
  //           cell.style.borderBottomLeftRadius = headRadius;
  //         }
  //         if (direction === "right") {
  //           cell.style.borderTopRightRadius = headRadius;
  //           cell.style.borderBottomRightRadius = headRadius;
  //         }
  //       }

  //       gameScreen.appendChild(cell);
  //     }
  //   }
  // }

  // function moveSnake() {
  //   let newX = snake[0].x;
  //   let newY = snake[0].y;

  //   switch (direction) {
  //     case "up":
  //       newY--;
  //       break;
  //     case "down":
  //       newY++;
  //       break;
  //     case "left":
  //       newX--;
  //       break;
  //     case "right":
  //       newX++;
  //       break;
  //   }

  //   if (
  //     newX >= 0 &&
  //     newX < 24 &&
  //     newY >= 0 &&
  //     newY < 40 &&
  //     !snake.find(snakeCell => snakeCell.x === newX && snakeCell.y === newY)
  //   ) {
  //     const newSnake = [...snake];
  //     newSnake.unshift({ x: newX, y: newY });
  //     setSnake(newSnake);

  //     if (newX === food.x && newY === food.y) {
  //       setScore(score + 1);
  //       if (score === 10) {

  //       } else {
  //         setFood({
  //           x: Math.floor(Math.random() * 24),
  //           y: Math.floor(Math.random() * 40),
  //         });
  //       }
  //     } else {
  //       newSnake.pop();
  //       setSnake(newSnake);
  //     }
  //   } else {
  //     // clearInterval(gameInterval);
  //     // setGameStarted(false);
  //     // setGameOver(true);
  //   }
  //   render();
  // }

  // function startGame() {
  //   if (!startButtonRef.current) return;
  //   startButtonRef.current.style.display = "none";

  //   setGameStarted(true);
  //   const newInterval = setInterval(moveSnake, 50);
  // }

  // function restartScore() {
  //   setScore(0);
  // }

  // function startAgain() {
  //   if (!startButtonRef.current) return;

  //   startButtonRef.current.style.display = "block";

  //   setGameStarted(false);
  //   setGameOver(false);
  //   restartScore();
  //   setFood({ x: 10, y: 5 });
  //   setSnake([
  //     { x: 10, y: 12 },
  //     { x: 10, y: 13 },
  //     { x: 10, y: 14 },
  //     { x: 10, y: 15 },
  //     { x: 10, y: 16 },
  //     { x: 10, y: 17 },
  //     { x: 10, y: 18 },
  //     { x: 11, y: 18 },
  //     { x: 12, y: 18 },
  //     { x: 13, y: 18 },
  //     { x: 14, y: 18 },
  //     { x: 15, y: 18 },
  //     { x: 15, y: 19 },
  //     { x: 15, y: 20 },
  //     { x: 15, y: 21 },
  //     { x: 15, y: 22 },
  //     { x: 15, y: 23 },
  //     { x: 15, y: 24 },
  //   ]);
  //   setDirection('up');
  // }

  // useEffect(() => {
  //   document.addEventListener('keydown', (e) => {
  //     if (gameStarted) {
  //       switch (e.keyCode) {
  //         case 32:
  //           if (gameOver) {
  //             startAgain();
  //           } else {
  //             startGame();
  //           }
  //           break;
  //       }
  //     }
  //   });

  //   window.onresize = () => {
  //     render();
  //   };

  //   render();
  // }, []);

  return (
    <div className={styles.console}>
      <div className={styles.corner} />
      <div className={styles.corner} />
      <div className={styles.corner} />
      <div className={styles.corner} />
      {/* <div className={styles.gamescreen} ref={gameScreenRef}></div> */}
      {/* <div className={styles.menu}></div>
      <button ref={startButtonRef} onClick={startGame}>start-game</button> */}
    </div>
  )
}

// export function Console() {
//   const [score, setScore] = useState(0);
//   const [gameInterval, setGameInterval] = useState(null);
//   const [gameStarted, setGameStarted] = useState(false);
//   const [gameOver, setGameOver] = useState(false);
//   const [food, setFood] = useState({ x: 10, y: 5 });
//   const [snake, setSnake] = useState([
//     { x: 10, y: 12 },
//     { x: 10, y: 13 },
//     { x: 10, y: 14 },
//     { x: 10, y: 15 },
//     { x: 10, y: 16 },
//     { x: 10, y: 17 },
//     { x: 10, y: 18 },
//     { x: 11, y: 18 },
//     { x: 12, y: 18 },
//     { x: 13, y: 18 },
//     { x: 14, y: 18 },
//     { x: 15, y: 18 },
//     { x: 15, y: 19 },
//     { x: 15, y: 20 },
//     { x: 15, y: 21 },
//     { x: 15, y: 22 },
//     { x: 15, y: 23 },
//     { x: 15, y: 24 },
//   ]);
//   const [direction, setDirection] = useState('up');

//   const gameScreenRef = useRef(null); // Ref for game screen

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (gameStarted) {
//         switch (event.keyCode) {
//           case 37:
//             if (direction !== 'right') {
//               setDirection('left');
//             }
//             break;
//           case 38:
//             if (direction !== 'down') {
//               setDirection('up');
//             }
//             break;
//           case 39:
//             if (direction !== 'left') {
//               setDirection('right');
//             }
//             break;
//           case 40:
//             if (direction !== 'up') {
//               setDirection('down');
//             }
//             break;
//         }
//       } else {
//         switch (event.keyCode) {
//           case 32:
//             if (gameOver) {
//               startAgain();
//             } else {
//               startGame();
//             }
//             break;
//         }
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);

//     render();

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [gameStarted, gameOver]);

//   const startGame = () => {
//     const startButton = document.getElementById('start-button');
//     if (startButton) {
//       startButton.style.display = 'none';
//     }

//     setGameStarted(true);
//     const interval = setInterval(moveSnake, 50);
//     setGameInterval(interval);
//   };

//   const startAgain = () => {
//     const startButton = document.getElementById('start-button');
//     if (startButton) {
//       startButton.style.display = 'block';
//     }

//     // const gameOverElement = document.getElementById('game-over');
//     // const congratsElement = document.getElementById('congrats');
//     // if (gameOverElement) {
//     //   gameOverElement.style.display = 'none';
//     // }
//     // if (congratsElement) {
//     //   congratsElement.style.display = 'none';
//     // }

//     setGameStarted(false);
//     setGameOver(false);
//     restartScore();
//     setFood({ x: 10, y: 5 });
//     setSnake([
//       { x: 10, y: 12 },
//       { x: 10, y: 13 },
//       { x: 10, y: 14 },
//       { x: 10, y: 15 },
//       { x: 10, y: 16 },
//       { x: 10, y: 17 },
//       { x: 10, y: 18 },
//       { x: 11, y: 18 },
//       { x: 12, y: 18 },
//       { x: 13, y: 18 },
//       { x: 14, y: 18 },
//       { x: 15, y: 18 },
//       { x: 15, y: 19 },
//       { x: 15, y: 20 },
//       { x: 15, y: 21 },
//       { x: 15, y: 22 },
//       { x: 15, y: 23 },
//       { x: 15, y: 24 },
//     ]);
//     setDirection('up');

//     if (gameInterval) {
//       clearInterval(gameInterval);
//     }

//     render();
//   };

//   const moveSnake = () => {
//     let newX = snake[0].x;
//     let newY = snake[0].y;

//     switch (direction) {
//       case 'up':
//         newY--;
//         break;
//       case 'down':
//         newY++;
//         break;
//       case 'left':
//         newX--;
//         break;
//       case 'right':
//         newX++;
//         break;
//     }

//     if (
//       newX >= 0 &&
//       newX < 24 &&
//       newY >= 0 &&
//       newY < 40 &&
//       !snake.find((snakeCell) => snakeCell.x === newX && snakeCell.y === newY)
//     ) {
//       snake.unshift({ x: newX, y: newY });

//       if (newX === food.x && newY === food.y) {
//         setScore(score + 1);

//         // const scoreFoods = document.getElementsByClassName('food');
//         // scoreFoods[score].style.opacity = 1;

//         if (score === 9) {
//           snake.unshift({ x: newX, y: newY });
//           setFood({ x: null, y: null });
//           clearInterval(gameInterval);
//           // const congratsElement = document.getElementById('congrats');
//           // if (congratsElement) {
//           //   congratsElement.style.display = 'block';
//           // }
//           setGameOver(true);
//           setGameStarted(false);
//         } else {
//           setFood({
//             x: Math.floor(Math.random() * 24),
//             y: Math.floor(Math.random() * 40),
//           });
//         }
//       } else {
//         snake.pop();
//       }
//     } else {
//       clearInterval(gameInterval);
//       // const gameOverElement = document.getElementById('game-over');
//       // if (gameOverElement) {
//       //   gameOverElement.style.display = 'block';
//       // }
//       setGameStarted(false);
//       setGameOver(true);
//     }
//     render();
//   };

//   const render = () => {
//     const gameScreen = gameScreenRef.current;
//     if (gameScreen) {
//       gameScreen.innerHTML = '';

//       const cellSize = window.innerWidth > 1536 ? '10px' : '8px';

//       for (let i = 0; i < 40; i++) {
//         for (let j = 0; j < 24; j++) {
//           const cell = document.createElement('div');
//           cell.classList.add('cell');
//           cell.style.width = cellSize;
//           cell.style.height = cellSize;
//           cell.style.display = 'flex';
//           cell.style.flexShrink = 0;
//           cell.classList.add('black');

//           if (j === food.x && i === food.y) {
//             cell.style.backgroundColor = '#43D9AD';
//             cell.style.borderRadius = '50%';
//             cell.style.boxShadow = '0 0 10px #43D9AD';
//           }

//           const snakeCell = snake.find(
//             (snakeCell) => snakeCell.x === j && snakeCell.y === i
//           );

//           if (snakeCell) {
//             cell.style.backgroundColor = '#43D9AD';
//             cell.style.opacity = 1 - snake.indexOf(snakeCell) / snake.length;
//             cell.classList.add('green');

//             if (snake.indexOf(snakeCell) === 0) {
//               const headRadius = '5px';
//               if (direction === 'up') {
//                 cell.style.borderTopLeftRadius = headRadius;
//                 cell.style.borderTopRightRadius = headRadius;
//               }
//               if (direction === 'down') {
//                 cell.style.borderBottomLeftRadius = headRadius;
//                 cell.style.borderBottomRightRadius = headRadius;
//               }
//               if (direction === 'left') {
//                 cell.style.borderTopLeftRadius = headRadius;
//                 cell.style.borderBottomLeftRadius = headRadius;
//               }
//               if (direction === 'right') {
//                 cell.style.borderTopRightRadius = headRadius;
//                 cell.style.borderBottomRightRadius = headRadius;
//               }
//             }
//           }
//           gameScreen.appendChild(cell);
//         }
//       }
//     }
//   };

//   const restartScore = () => {
//     setScore(0);
//     // const scoreFoods = document.getElementsByClassName('food');
//     // for (let i = 0; i < scoreFoods.length; i++) {
//     //   scoreFoods[i].style.opacity = 0.3;
//     // }
//   };

//   const startButtonStyle = {
//     display: gameStarted ? 'none' : 'block',
//   };

//   const gameOverStyle = {
//     display: gameOver ? 'block' : 'none',
//   };

//   const congratsStyle = {
//     display: score === 10 ? 'block' : 'none',
//   };

//   return (
//     <div id="console" className={styles.console}>
//       <div id="game-screen" ref={gameScreenRef} className={styles.gamescreen}></div>
//       <button
//         id="start-button"
//         style={startButtonStyle}
//         onClick={startGame}
//       >
//         start-game
//       </button>
//       <div id="game-over" style={gameOverStyle} className="hidden">
//         <span className="font-fira_retina text-greenfy bg-bluefy-dark h-12 flex items-center justify-center">
//           GAME OVER!
//         </span>
//         <button
//           className="font-fira_retina text-menu-text text-sm flex items-center justify-center w-full py-6 hover:text-white"
//           onClick={startAgain}
//         >
//           start-again
//         </button>
//       </div>
//       <div id="congrats" style={congratsStyle} className="hidden">
//         <span className="font-fira_retina text-greenfy bg-bluefy-dark h-12 flex items-center justify-center">
//           WELL DONE!
//         </span>
//         <button
//           className="font-fira_retina text-menu-text text-sm flex items-center justify-center w-full py-6 hover:text-white"
//           onClick={startAgain}
//         >
//           play-again
//         </button>
//       </div>
//       {/* ... rest of the JSX code */}
//     </div>
//   );
// };


