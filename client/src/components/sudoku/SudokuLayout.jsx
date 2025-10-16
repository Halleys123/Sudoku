import SudokuBox from './SudokuBox';
import SudokuInputs from './SudokuInputs';
import { useState, useMemo, useCallback } from 'react';
import useMessage from '@/hooks/useMessage';

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
  const { addMessage } = useMessage();

  //   const [mode, setMode] = useState('input'); // input | note
  const [mode, setMode] = useState('selection'); // burst | selection
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCell, setSelectedCell] = useState([1, 1]); // [row, col]
  const [sudokuState, setSudokuState] = useState(
    originalSudokuState.map((row) => [...row])
  );
  const [notes, setNotes] = useState({
    11: new Set([1, 8, 3]),
  });
  const options = useMemo(() => {
    const tempState = { 1: 9, 2: 9, 3: 9, 4: 9, 5: 9, 6: 9, 7: 9, 8: 9, 9: 9 };
    sudokuState.forEach((row) =>
      row.forEach((cell) => {
        if (cell !== 0) {
          tempState[cell] -= 1;
        }
      })
    );
    return tempState;
  }, [sudokuState]);
  const fillCell = useCallback(
    (row, col, value) => {
      if (mode == 'selection') {
        row = selectedCell[0];
        col = selectedCell[1];
      } else {
        if (selectedOption === null) {
          // addMessage({
          //   heading: 'No number selected',
          //   message: 'Please select a number to input.',
          //   type: 'warning',
          // });
          return;
        }
      }

      if (row === -1 || col === -1) {
        addMessage({
          heading: 'No cell selected',
          message: 'Please select a cell to input a value.',
          type: 'warning',
        });
        return;
      }

      if (originalSudokuState[row][col] !== 0) {
        if (value == -1) {
          addMessage({
            heading: 'Invalid cell',
            message: 'You cannot erase a pre-filled cell.',
            type: 'error',
          });
        }
        return;
      }

      if (sudokuState[row][col] === value) {
        return;
      }

      if (value != -1 && sudokuState[row][col] != 0) {
        return;
      }
      console.log(row, col, value);

      if (
        (mode === 'burst' && selectedOption === -1) ||
        (mode == 'selection' && value == -1)
      ) {
        setSelectedCell([-1, -1]);
        // erase
        const prevValue = sudokuState[row][col];
        if (prevValue === 0) return;
        setSudokuState((prev) => {
          const newState = prev.map((r) => [...r]);
          newState[row][col] = 0;
          return newState;
        });
        return;
      }

      if (options[value] === 0) {
        addMessage({
          heading: 'No blocks left',
          message: `You have used all blocks of number ${value}.`,
          type: 'error',
        });
        return;
      }

      setSudokuState((prev) => {
        const newState = prev.map((r) => [...r]);
        newState[row][col] = value;
        return newState;
      });
    },
    [mode, selectedCell, sudokuState, options, addMessage, selectedOption]
  );

  const handleInputClick = useCallback(
    (row, col) => {
      if (row == selectedCell[0] && col == selectedCell[1])
        setSelectedCell([-1, -1]);
      else setSelectedCell([row, col]);

      if (mode == 'burst') {
        fillCell(row, col, selectedOption);
        return;
      }
    },
    [selectedCell, mode, fillCell, selectedOption]
  );

  const handleOptionClick = useCallback(
    (value) => {
      if (mode == 'burst') {
        setSelectedOption((prev) => (prev === value ? null : value));
      } else {
        setSelectedOption(null);
        fillCell(selectedCell[0], selectedCell[1], value);
      }
    },
    [mode, fillCell, selectedCell]
  );

  return (
    <div
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key >= '1' && e.key <= '9') {
          handleOptionClick(Number(e.key));
        }
        if (e.key == 'Delete' || e.key == 'Backspace') {
          handleOptionClick(0);
        }
        if (e.key == 'Escape') {
          setSelectedCell([-1, -1]);
        }
        if (mode !== 'selection') return;

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
      className='flex flex-col md:flex-row gap-6'
    >
      <SudokuBox
        onClick={handleInputClick}
        sudokuState={sudokuState}
        selectedCell={selectedCell}
        selectedOption={selectedOption}
        mode={mode}
        notes={notes}
      />
      <SudokuInputs
        setMode={setMode}
        mode={mode}
        onClick={handleOptionClick}
        numbers={options}
        selectedNumber={selectedOption}
        setSelectedNumber={setSelectedOption}
        setSelectedCell={setSelectedCell}
      />
    </div>
  );
}
