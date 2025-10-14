import SudokuBox from './SudokuBox';
import SudokuInputs from './SudokuInputs';
import { useState } from 'react';
// import { useState } from 'react';

const originalSudokuState = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

export default function SudokuLayout() {
  //   const [mode, setMode] = useState('selection'); // continuous-input | note | selection
  const [selectedCell, setSelectedCell] = useState([1, 1]); // [row, col]
  const [sudokuState, setSudokuState] = useState(
    originalSudokuState.map((row) => [...row])
  );
  const [numbers, setNumbers] = useState(() => {
    const tempState = { 1: 9, 2: 9, 3: 9, 4: 9, 5: 9, 6: 9, 7: 9, 8: 9, 9: 9 };
    originalSudokuState.map((row) =>
      row.map((cell) => {
        if (cell !== 0) {
          tempState[cell] -= 1;
        }
      })
    );
    return tempState;
  });

  function handleMiniBoxClick(row, col) {
    if (row == selectedCell[0] && col == selectedCell[1])
      setSelectedCell([-1, -1]);
    else setSelectedCell([row, col]);
  }

  function handleOnClickInput(value) {
    if (selectedCell[0] === -1 || selectedCell[1] === -1) return;
    if (originalSudokuState[selectedCell[0]][selectedCell[1]] !== 0) return;
    if (sudokuState[selectedCell[0]][selectedCell[1]] === value) {
      setSudokuState((prev) => {
        const newState = prev.map((row) => [...row]);
        newState[selectedCell[0]][selectedCell[1]] = 0;
        return newState;
      });
      setNumbers((prev) => {
        return { ...prev, [value]: prev[value] + 1 };
      });

      return;
    }
    if (numbers[value] === 0) return;

    setSudokuState((prev) => {
      const newState = prev.map((row) => [...row]);
      newState[selectedCell[0]][selectedCell[1]] = value;
      return newState;
    });

    setNumbers((prev) => {
      return { ...prev, [value]: prev[value] - 1 };
    });
  }

  return (
    <div
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key >= '1' && e.key <= '9') {
          handleOnClickInput(Number(e.key));
        }
        if (e.key == 'Delete' || e.key == 'Backspace') {
          handleOnClickInput(0);
        }
        if (e.key == 'Escape') {
          setSelectedCell([-1, -1]);
        }
        if (e.key == 'ArrowUp') {
          setSelectedCell((prev) => {
            if (prev[0] <= 0) return prev;
            return [prev[0] - 1, prev[1]];
          });
        }
        if (e.key == 'ArrowDown') {
          setSelectedCell((prev) => {
            if (prev[0] >= 8) return prev;
            return [prev[0] + 1, prev[1]];
          });
        }
        if (e.key == 'ArrowLeft') {
          setSelectedCell((prev) => {
            if (prev[1] <= 0) return prev;
            return [prev[0], prev[1] - 1];
          });
        }
        if (e.key == 'ArrowRight') {
          setSelectedCell((prev) => {
            if (prev[1] >= 8) return prev;
            return [prev[0], prev[1] + 1];
          });
        }
      }}
      className='flex flex-row gap-6'
    >
      <SudokuBox
        onClick={handleMiniBoxClick}
        sudokuState={sudokuState}
        selectedCell={selectedCell}
      />
      <SudokuInputs onClick={handleOnClickInput} numbers={numbers} />
    </div>
  );
}
