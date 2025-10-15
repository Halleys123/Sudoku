export default function InputBox({
  number,
  selected,
  blocksLeft,
  showBlocksLeft = true,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`value-change-blink relative border-shade-700 w-12 h-12 group transition-colors items-center justify-center flex rounded-lg select-none ${
        selected
          ? 'bg-secondary-600'
          : blocksLeft
          ? 'bg-shade-50 hover:bg-shade-100 cursor-pointer'
          : 'bg-error-400 hover:bg-error-500 cursor-not-allowed'
      } `}
    >
      <span
        className={`font-secondary text-xl ${
          blocksLeft
            ? selected
              ? 'text-shade-50'
              : 'text-shade-800  group-hover:text-primary-400'
            : 'text-shade-50'
        }`}
      >
        {number}
      </span>
      {showBlocksLeft && blocksLeft ? (
        <div className='absolute flex items-center justify-center h-6 w-6 bg-shade-800 rounded-sm top-0 right-0 -translate-y-3 translate-x-2'>
          <span className='text-sm text-shade-50 font-primary'>
            {blocksLeft}
          </span>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
