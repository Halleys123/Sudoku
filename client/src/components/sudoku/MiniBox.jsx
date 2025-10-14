export default function MiniBox({
  data,
  row,
  col,
  selectedCell,
  style,
  onClick,
}) {
  return (
    <div
      className={`w-16 h-16 font-secondary text-xl flex items-center justify-center text-shade-900 transition-colors select-none cursor-pointer ${
        selectedCell[0] === row && selectedCell[1] === col
          ? 'bg-primary-200 hover:bg-primary-300'
          : selectedCell[0] === row || selectedCell[1] === col
          ? 'hover:bg-primary-200 bg-primary-100'
          : 'hover:bg-primary-50'
      }`}
      style={style}
      onClick={onClick}
    >
      {data ? data : ''}
    </div>
  );
}
