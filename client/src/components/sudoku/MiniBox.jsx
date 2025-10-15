import { memo } from 'react';

export default memo(function MiniBox({
  data,
  row,
  col,
  selectedCell,
  highlight = false,
  style,
  onClick,
}) {
  const baseClass =
    'h-11 w-11 md:w-16 md:h-16 font-secondary text-md md:text-xl flex items-center justify-center transition-colors select-none cursor-pointer';
  const selectedClass =
    'bg-primary-200 hover:bg-primary-300 text-shade-900 font-bold';
  const highlightClass =
    'bg-primary-200 hover:bg-primary-300 text-primary-700 font-bold';
  const axisClass =
    'bg-primary-100 hover:bg-primary-200 text-primary-700 font-bold';
  const defaultClass = 'bg-shade-50 text-shade-800';

  const isSelected = selectedCell?.[0] === row && selectedCell?.[1] === col;
  const sharesAxis =
    !isSelected && (selectedCell?.[0] === row || selectedCell?.[1] === col);

  const stateClass = isSelected
    ? selectedClass
    : highlight
    ? highlightClass
    : sharesAxis
    ? axisClass
    : defaultClass;

  return (
    <div
      className={`${baseClass} ${stateClass}`}
      style={style}
      onClick={onClick}
    >
      {data ? data : ''}
    </div>
  );
});
