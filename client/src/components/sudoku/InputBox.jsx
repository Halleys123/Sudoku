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
      className={`value-change-blink relative w-12 h-12 md:w-16 md:h-16 group transition-all duration-200 items-center justify-center flex rounded-lg select-none ${
        selected
          ? 'bg-secondary-500 shadow-lg ring-2 ring-secondary-600 ring-offset-2'
          : blocksLeft
          ? 'bg-shade-50 hover:bg-primary-50 cursor-pointer hover:shadow-md hover:ring-2 hover:ring-primary-300'
          : 'bg-error-400 cursor-not-allowed opacity-60'
      } `}
    >
      <span
        className={`font-secondary text-lg md:text-2xl font-semibold transition-colors ${
          blocksLeft
            ? selected
              ? 'text-shade-50'
              : 'text-shade-800 group-hover:text-primary-700'
            : 'text-shade-50'
        }`}
      >
        {number}
      </span>
      {showBlocksLeft && blocksLeft ? (
        <div className='absolute flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 bg-primary-700 rounded-md top-0 right-0 -translate-y-1.5 translate-x-1.5'>
          <span className='text-xs text-shade-50 font-primary font-bold'>
            {blocksLeft}
          </span>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
