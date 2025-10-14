import SudokuBox from './SudokuBox';
import SudokuInputs from './SudokuInputs';
import { useState } from 'react';
// import { useState } from 'react';

export default function SudokuLayout() {
  //   const [mode, setMode] = useState('selection'); // continuous-input | note | selection
  const [selectedCell, setSelectedCell] = useState([1, 1]); // [row, col]
  const [sudokuState, setSudokuState] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  function handleMiniBoxClick(row, col) {
    if (row == selectedCell[0] && col == selectedCell[1])
      setSelectedCell([-1, -1]);
    else setSelectedCell([row, col]);
  }

  function handleOnClickInput(value) {
    if (selectedCell[0] === -1 || selectedCell[1] === -1) return;
    setSudokuState((prev) => {
      const newState = prev.map((row) => [...row]);
      newState[selectedCell[0]][selectedCell[1]] = value;
      return newState;
    });
  }

  return (
    <div className='flex flex-col gap-6 items-center'>
      <SudokuBox
        onClick={handleMiniBoxClick}
        sudokuState={sudokuState}
        selectedCell={selectedCell}
      />
      <SudokuInputs onClick={handleOnClickInput} />
    </div>
  );
}
