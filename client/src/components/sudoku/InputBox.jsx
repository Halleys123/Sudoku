import { memo } from 'react';
import BlocksRemaining from './BlocksRemaining';

export default memo(function InputBox({
  number,
  selected,
  blocksLeft,
  onClick,
}) {
  let showBlocksLeft = blocksLeft > 0;
  return (
    <div
      onClick={onClick}
      className={`value-change-blink relative w-12 h-12 md:w-16 md:h-16 group transition-all duration-200 items-center justify-center flex rounded-lg select-none ${
        selected
          ? 'bg-info-500 shadow-lg ring-2 ring-info-600'
          : showBlocksLeft
          ? 'bg-shade-50 hover:bg-primary-50 cursor-pointer hover:shadow-md hover:ring-2 hover:ring-primary-300'
          : 'bg-success-500  cursor-not-allowed'
      } `}
    >
      <span
        className={`font-secondary text-lg md:text-2xl font-semibold transition-colors ${
          showBlocksLeft
            ? selected
              ? 'text-shade-50'
              : 'text-shade-800 group-hover:text-primary-700'
            : 'text-shade-50'
        }`}
      >
        {number}
      </span>
      {showBlocksLeft && <BlocksRemaining count={blocksLeft} />}
    </div>
  );
});
