import MiniBox from '@components/sudoku/MiniBox.jsx';
import { memo } from 'react';

export default memo(function SudokuBox({
  onClick,
  selectedCell,
  sudokuState,
  selectedOption,
  notes,
  originalSudokuState,
  lastAction,
  useHighlight,
}) {
  function shouldHighlight(row, col, cellData) {
    // if burst mode then first priority is any selectedCell matching values
    // if no selected cell then selectedValue or option and same row or col
    // if no selectedValue or option then nothing

    // if not burst mode then just selectedCell matching values or same row and col
    let finalHighlight = false;

    if (
      lastAction == 'cellClick' &&
      selectedCell[0] != -1 &&
      selectedCell[1] != -1
    ) {
      if (useHighlight.row && row == selectedCell[0]) finalHighlight = true;
      if (useHighlight.column && col == selectedCell[1]) finalHighlight = true;
    }

    if (selectedOption != null) {
      finalHighlight = cellData == selectedOption && cellData != 0;
    } else if (
      useHighlight.sameValue &&
      selectedOption == null &&
      selectedCell[0] != -1 &&
      selectedCell[1] != -1 &&
      cellData == sudokuState[selectedCell[0]][selectedCell[1]] &&
      cellData != 0
    ) {
      finalHighlight = true;
    }

    return finalHighlight;
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
              isOriginalCell={originalSudokuState[rowIndex][cellIndex] !== 0}
              notes={notes[rowIndex * 10 + cellIndex]}
              highlight={shouldHighlight(rowIndex, cellIndex, cellData)}
              onClick={() => onClick(rowIndex, cellIndex)}
              selectedCell={lastAction == 'cellClick' ? selectedCell : [-1, -1]}
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
});
