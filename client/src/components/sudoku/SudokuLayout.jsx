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

  const [inputMode, setInputMode] = useState('note'); // input | note | erase
  const [mode, setMode] = useState('selection'); // burst | selection

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCell, setSelectedCell] = useState([1, 1]); // [row, col]

  const [sudokuState, setSudokuState] = useState(
    originalSudokuState.map((row) => [...row])
  );
  const [notes, setNotes] = useState({
    // 11: new Set([1, 8, 3]),
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

  const handleOptionClick = useCallback((optionValue) => {}, []);

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
        // onClick={handleInputClick}
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
        setInputMode={setInputMode}
        inputMode={inputMode}
        setSelectedNumber={setSelectedOption}
        setSelectedCell={setSelectedCell}
      />
    </div>
  );
}
