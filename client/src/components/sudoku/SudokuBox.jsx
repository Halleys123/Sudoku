import MiniBox from '@components/sudoku/MiniBox.jsx';

export default function SudokuBox({
  onClick,
  selectedCell,
  sudokuState,
  selectedOption,
  mode,
}) {
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
              highlight={
                mode === 'selection'
                  ? selectedCell[0] != -1 &&
                    selectedCell[1] != -1 &&
                    cellData == sudokuState[selectedCell[0]][selectedCell[1]] &&
                    cellData != 0
                  : selectedOption != null &&
                    cellData == selectedOption &&
                    cellData != 0
              }
              onClick={() => onClick(rowIndex, cellIndex)}
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
