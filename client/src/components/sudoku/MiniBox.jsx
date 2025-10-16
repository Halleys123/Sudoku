import { memo } from 'react';

export default memo(function MiniBox({
  data,
  row,
  col,
  selectedCell,
  highlight = false,
  style,
  onClick,
  notes = [],
}) {
  const baseClass =
    'relative grid grid-cols-3 grid-rows-3 h-11 w-11 md:w-16 md:h-16 font-secondary text-md md:text-xl flex items-center justify-center transition-colors select-none cursor-pointer';
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
      <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        {data ? data : ''}
      </span>
      {notes &&
        Array.from(notes).map((hint, index) => {
          return (
            <span
              style={{
                gridColumn: ((hint - 1) % 3) + 1,
                gridRow: Math.floor((hint - 1) / 3) + 1,
              }}
              className='absolute text-xs sm:text-sm top-1 left-1'
              key={index}
            >
              {hint}
            </span>
          );
        })}
    </div>
  );
});
