import { memo } from 'react';

export default memo(function MiniBox({
  data,
  row,
  col,
  selectedCell,
  isOriginalCell,
  highlight = false,
  style,
  onClick,
  notes = [],
}) {
  const isSelected = selectedCell[0] === row && selectedCell[1] === col;
  const isHighlighted = highlight && !isSelected;

  const outerClass = 'p-[1px] w-12 h-12 sm:w-16 sm:h-16 relative';
  const innerBaseClass = 'w-full h-full grid grid-cols-3 grid-rows-3';

  // Which ever cell it is either original or filled
  // If isSelected then
  // bg = primary-400 hover:bg-primary-500 text-neutral-700 font-bold
  // else if isHighlighted then
  // bg = primary-200 hover:bg-primary-300 text-neutral-800 font-medium
  // else if isOriginalCell then
  // text-neutral-500
  // else if has data then
  // text-secondary-600

  let stateClass = 'relative cursor-pointer transition-colors duration-100 ';
  let textClass = ' font-secondary text-2xl ';

  if (isSelected) {
    stateClass += 'bg-primary-300 hover:bg-primary-400';
    textClass += 'text-shade-50 font-normal';
  } else if (isHighlighted) {
    stateClass += 'bg-primary-200 hover:bg-primary-300';
    textClass += 'text-neutral-900 font-normal';
  } else if (isOriginalCell) {
    textClass += 'text-neutral-500 font-light';
  } else if (data) {
    stateClass += 'bg-neutral-100 hover:bg-neutral-200';
    textClass += 'text-primary-800/60 font-medium';
  }

  return (
    <div className={outerClass} style={style} onClick={onClick}>
      {/* Inner div with all visual states */}
      <div className={`${innerBaseClass} ${stateClass}`}>
        <span
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ${textClass}`}
        >
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
