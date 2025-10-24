export default function Cell({ value = 0, row, col, onClick, isSelected }) {
  return (
    <div
      className={`border  cursor-pointer transition-colors border-gray-300 flex items-center justify-center h-16 w-16
      ${col % 3 === 0 && col !== 9 ? 'border-r-2' : ''}
      ${row % 3 === 0 && row !== 9 ? 'border-b-2' : ''}
      ${isSelected ? 'bg-neutral-800' : 'bg-neutral-900 hover:bg-neutral-950'}
      `}
      onClick={onClick}
    >
      {value ? value : ''}
    </div>
  );
}
