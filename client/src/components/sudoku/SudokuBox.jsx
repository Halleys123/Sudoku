import { useState } from 'react';
import MiniBox from '@components/sudoku/MiniBox.jsx';

export default function SudokuBox() {
  const [mode, setMode] = useState('selection'); // continuous-input | note | selection
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

  const [selectedCell, setSelectedCell] = useState([1, 1]); // [row, col]

  function handleMiniBoxClick(row, col) {
    if (row == selectedCell[0] && col == selectedCell[1])
      setSelectedCell([-1, -1]);
    else setSelectedCell([row, col]);
  }

  return (
    <div className='max-w-xl aspect-square rounded-2xl bg-shade-50 grid grid-cols-9 overflow-hidden border border-shade-100'>
      {sudokuState.map((rowData, rowIndex) => {
        return rowData.map((cellData, cellIndex) => {
          return (
            <MiniBox
              key={`${rowIndex}-${cellIndex}`}
              data={cellData}
              row={rowIndex}
              col={cellIndex}
              onClick={() => handleMiniBoxClick(rowIndex, cellIndex)}
              selectedCell={selectedCell}
              style={{
                borderRight:
                  cellIndex % 3 === 2
                    ? cellIndex !== 8
                      ? '1px solid var(--color-shade-800)'
                      : 'none'
                    : '1px solid var(--color-shade-200)',
                borderBottom:
                  rowIndex % 3 === 2
                    ? rowIndex !== 8
                      ? '1px solid var(--color-shade-800)'
                      : 'none'
                    : '1px solid var(--color-shade-200)',
              }}
            />
          );
        });
      })}
    </div>
  );
}
