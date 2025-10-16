import SudokuBox from './SudokuBox';
import SudokuInputs from './SudokuInputs';
import { useState, useMemo } from 'react';
import useMessage from '@/hooks/useMessage';
import * as sudokuActions from './utils/sudokuActions.jsx';

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

  const [inputMode, setInputMode] = useState('input'); // input | note | erase
  const [burstMode, setBurstMode] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCell, setSelectedCell] = useState([1, 1]); // [row, col]

  const [sudokuState, setSudokuState] = useState(
    originalSudokuState.map((row) => [...row])
  );
  const [notes, setNotes] = useState({});

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

  const toggleNote = (row, col, value) => {
    sudokuActions.toggleNote(
      row,
      col,
      value,
      originalSudokuState,
      sudokuState,
      setNotes
    );
  };

  const clearCell = (row, col) => {
    sudokuActions.clearCell(
      row,
      col,
      originalSudokuState,
      sudokuState,
      setSudokuState,
      setNotes,
      addMessage
    );
  };

  const inputValue = (row, col, value) => {
    sudokuActions.inputValue(
      row,
      col,
      value,
      originalSudokuState,
      sudokuState,
      setSudokuState,
      setNotes,
      options,
      setSelectedOption
    );
  };

  function handleCellClick(row, col) {
    setSelectedCell((prev) => {
      if (row == prev[0] && col == prev[1]) return [-1, -1];
      else return [row, col];
    });
    if (!burstMode) return;

    if (inputMode === 'input') inputValue(row, col, selectedOption);
    else if (inputMode === 'note') toggleNote(row, col, selectedOption);
    else if (inputMode === 'erase') clearCell(row, col);
  }

  function handleOptionClick(value) {
    if (burstMode) {
      if (options[value] <= 0) return;
      setSelectedOption(value);
      if (inputMode === 'erase') setInputMode('input');
      return;
    }

    if (inputMode === 'input')
      inputValue(selectedCell[0], selectedCell[1], value);
    else if (inputMode === 'note')
      toggleNote(selectedCell[0], selectedCell[1], value);
    else if (inputMode === 'erase') clearCell(selectedCell[0], selectedCell[1]);
  }

  const handleKeyDown = (e) => {
    sudokuActions.handleKeyDown(
      e,
      burstMode,
      selectedCell,
      setSelectedCell,
      handleOptionClick,
      originalSudokuState,
      sudokuState,
      setSudokuState,
      setNotes,
      addMessage
    );
  };

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className='flex flex-col md:flex-row gap-6'
    >
      <SudokuBox
        onClick={handleCellClick}
        sudokuState={sudokuState}
        originalSudokuState={originalSudokuState}
        selectedCell={selectedCell}
        selectedOption={selectedOption}
        burstMode={burstMode}
        notes={notes}
      />
      <SudokuInputs
        burstMode={burstMode}
        setBurstMode={setBurstMode}
        onClick={handleOptionClick}
        numbers={options}
        selectedNumber={selectedOption}
        setInputMode={setInputMode}
        inputMode={inputMode}
        setSelectedNumber={setSelectedOption}
        setSelectedCell={setSelectedCell}
        eraseCell={() => clearCell(selectedCell[0], selectedCell[1])}
      />
    </div>
  );
}
