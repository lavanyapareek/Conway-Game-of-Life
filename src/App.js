import './App.css';
import React, { useState, useCallback, useRef } from "react";
import produce from "immer";
import {information as information} from './information';
const numRows = 130;
const numCols = 130;
const glider = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1]
]
const blinker = [
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0]
]
const beacon = [
  [1, 1, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 1, 1],
  [0, 0, 1, 1]
]
const toad = [
  [0, 1, 1, 1],
  [1, 1, 1, 0],
]
const lineFractal = Array(numCols).fill(1)
const pulsar = [
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
]
const acorn = [
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 0, 1, 1, 1],
]
const gosperGliderGun =
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]
const rpentomino = [[0, 1, 1],
[1, 1, 0],
[0, 1, 0]]
const queenBeeSpaceShip = [
  [1,0,0,0],
  [1,0,0,0],
  [1,0,0,0],
  [0,1,1,1],
  [0,1,1,0]
]

const blockLayingSwitchEngine = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1]
]


const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0]
];

const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }

  return rows;
};
export default function App() {

  const[inf, setInf] = useState(information[0]);
  const[showGrid, setShowGrid] = useState(false);
  const borderValue = showGrid ? "solid white 0.1px" : "none";
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });


  const handleGeneration = (pattern, i) => {
    const newGrid = produce(grid, gridCopy => {
      for (let i = 0; i < pattern.length; i++) {
        for (let j = 0; j < pattern[i].length; j++) {
          gridCopy[i + numCols / 2][j + numCols / 2] = pattern[i][j];
        }
      }
    });
    setGrid(newGrid);
    setInf(information[i]);
  }
  const generateRandomGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => Math.random() < 0.75 ? 0 : 1))
    }
    return rows;
  }
  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid((g) => {
      const gridCopy = Array.from({ length: numRows }, () => Array(numCols).fill(0));

      for (let i = 0; i < numRows; i++) {
        for (let k = 0; k < numCols; k++) {
          let neighbors = 0;
          operations.forEach(([x, y]) => {
            const newI = i + x;
            const newK = k + y;
            if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
              neighbors += g[newI][newK];
            }
          });

          if (neighbors < 2 || neighbors > 3) {
            gridCopy[i][k] = 0;
          } else if (g[i][k] === 0 && neighbors === 3) {
            gridCopy[i][k] = 1;
          } else {
            gridCopy[i][k] = g[i][k];
          }
        }
      }
      return gridCopy;
    });


    setTimeout(runSimulation, 0);
  }, []);

  return (
    <>
      <div className='game-of-life-grid'>
      <div className='button-class'>
        <button onClick={() => {
          setRunning(!running);
          if (!running) {
            setInf(information[1]);
            runningRef.current = true;
            runSimulation();
          }
        }}>
          {running ? 'stop' : 'start'}
        </button>
        <button onClick={() => {
          setGrid(generateRandomGrid())
        }}>
          random-setup
        </button>
        <button onClick={() => setShowGrid(!showGrid)}>
          Grid
        </button>
        <button onClick={() => {
          setGrid(generateEmptyGrid())
        }}>
          clear
        </button>
        <button onClick={() => handleGeneration(glider,2)}>
          glider
        </button>
        <button onClick={() => handleGeneration(rpentomino,3)}>
        R-pentomino
        </button>
        <button onClick={() => handleGeneration(lineFractal,12)}>
        line-Fractal
        </button>
        <button onClick={() => handleGeneration(queenBeeSpaceShip,4)}>
          Queen Bee SpaceShip
        </button>
        <button onClick={() => handleGeneration(gosperGliderGun,5)}>
          Gosper Glider Gun
        </button>
        <button onClick={() => handleGeneration(acorn,6)}>
        acorn
        </button>
        <button onClick={() => handleGeneration(pulsar,7)}>
        pulsar
        </button>
        <button onClick={() => handleGeneration(beacon,8)}>
        beacon
        </button>
        <button onClick={() => handleGeneration(blinker,9)}>
        blinker
        </button>
        <button onClick={() => handleGeneration(toad,10)}>
        toad
        </button>
        <button onClick={() => handleGeneration(blockLayingSwitchEngine,11)}>
        block laying switch engine
        </button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${numCols}, 5px)`
      }}>
        {grid.map((rows, i) =>
          rows.map((col, k) =>
            <div
              key={`${i}-${k}`}
              onClick={() => {
                const newGrid = produce(grid, gridCopy => {
                  gridCopy[i][k] = grid[i][k] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              style={{
                width: "5px",
                height: "5px",
                backgroundColor: grid[i][k] !== 0 ? 'white' : undefined,
                border: `${borderValue}`
              }}
            />))}
      </div>
    </div>
    <div className='information-class'>
    <div className='information'>{inf}</div>
  </div>
  </>
  );
};




