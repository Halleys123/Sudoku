export default function MiniBox({
  data,
  row,
  col,
  selectedCell,
  highlight = false,
  style,
  onClick,
}) {
  return (
    <div
      className={`h-11 w-11 md:w-16 md:h-16 font-secondary text-md md:text-xl flex items-center justify-center text-shade-900 transition-colors select-none cursor-pointer ${
        selectedCell[0] === row && selectedCell[1] === col
          ? 'bg-primary-200 hover:bg-primary-300'
          : selectedCell[0] === row || selectedCell[1] === col
          ? highlight
            ? 'bg-primary-200 hover:bg-primary-300'
            : 'hover:bg-primary-200 bg-primary-100'
          : highlight
          ? 'hover:bg-primary-300 bg-primary-200'
          : 'bg-shade-50'
      }`}
      style={style}
      onClick={onClick}
    >
      {data ? data : ''}
    </div>
  );
}
