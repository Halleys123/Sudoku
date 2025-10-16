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
  const isSelected = selectedCell?.[0] === row && selectedCell?.[1] === col;
  const sharesAxis =
    !isSelected && (selectedCell?.[0] === row || selectedCell?.[1] === col);

  const selectedColor =
    'bg-primary-200 hover:bg-primary-300 text-shade-900 font-bold';
  const highlightColor =
    'bg-primary-200 hover:bg-primary-300 text-primary-700 font-bold';
  const axisColor =
    'bg-primary-100 hover:bg-primary-200 text-primary-700 font-bold';
  const defaultColor = 'bg-shade-50 hover:bg-primary-100 text-shade-800';

  const innerBaseClass =
    'relative grid grid-cols-3 grid-rows-3 h-full w-full font-secondary text-md md:text-xl flex items-center justify-center transition-colors';
  const selectedClass = `text-shade-900 font-bold ${selectedColor}`;
  const highlightClass = `text-primary-700 font-bold ${highlightColor}`;
  const axisClass = `text-primary-700 font-bold ${axisColor}`;
  const defaultClass = `bg-shade-50 hover:bg-primary-100 ${defaultColor}`;

  const outerClass = `relative h-11 w-11 md:w-16 md:h-16 select-none cursor-pointer p-[1px]`;

  const stateClass = isSelected
    ? selectedClass
    : highlight
    ? highlightClass
    : sharesAxis
    ? axisClass
    : defaultClass;

  return (
    <div className={outerClass} style={style} onClick={onClick}>
      {/* Inner div with all visual states */}
      <div className={`${innerBaseClass} ${stateClass}`}>
        <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
          {data ? data : ''}
        </span>
        {!data &&
          notes &&
          Array.from(notes).map((hint, index) => {
            return (
              <span
                style={{
                  gridColumn: ((hint - 1) % 3) + 1,
                  gridRow: Math.floor((hint - 1) / 3) + 1,
                }}
                className='absolute text-xs sm:text-sm top-1 left-1 z-10'
                key={index}
              >
                {hint}
              </span>
            );
          })}
      </div>
    </div>
  );
});
