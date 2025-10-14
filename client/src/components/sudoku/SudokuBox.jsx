import MiniBox from '@components/sudoku/MiniBox.jsx';

export default function SudokuBox({ onClick, selectedCell, sudokuState }) {
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
