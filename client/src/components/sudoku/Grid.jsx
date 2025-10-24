import Cell from '@/components/sudoku/Cell.jsx';
import { useState, useEffect } from 'react';

function handleCellSelection(row, col, selectedCell, setSelectedCell) {
  if (selectedCell[0] === row && selectedCell[1] === col) {
    setSelectedCell([-1, -1]);
  } else {
    setSelectedCell([row, col]);
  }
}

export default function Grid({ sudoku, setSudoku = () => {} }) {
  const errorTextClasses = 'text-error-300 font-bold text-lg';

  const [isError, setIsError] = useState(null);
  const [selectedCell, setSelectedCell] = useState([-1, -1]);

  useEffect(() => {
    if (!Array.isArray(sudoku) || sudoku.length !== 9) {
      setIsError('Invalid Sudoku grid: Must be a 9x9 array.');
      return;
    }
    if (sudoku.some((row) => !Array.isArray(row) || row.length !== 9)) {
      setIsError(
        'Invalid Sudoku grid: Each row must be an array of 9 elements.'
      );
      return;
    }
    setIsError(null); // No error
  }, [sudoku]);

  if (isError) {
    return <span className={errorTextClasses}>{isError}</span>;
  }

  return (
    <div className='grid grid-cols-9 grid-rows-9'>
      {sudoku.map((row, rowIndex) =>
        row.map((cellValue, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            value={cellValue}
            row={rowIndex + 1}
            col={colIndex + 1}
            isSelected={
              selectedCell[0] === rowIndex && selectedCell[1] === colIndex
            }
            onClick={() =>
              handleCellSelection(
                rowIndex,
                colIndex,
                selectedCell,
                setSelectedCell
              )
            }
          />
        ))
      )}
    </div>
  );
}
