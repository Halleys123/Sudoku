import { memo } from 'react';
import InputBox from './InputBox';

export default memo(function SudokuInputs({
  onClick,
  numbers,
  mode,
  setMode,
  selectedNumber,
  setSelectedNumber,
}) {
  return (
    <div className='flex flex-col items-center gap-8'>
      <div className='grid grid-cols-5 md:grid-cols-3 gap-4 h-fit'>
        {Object.keys(numbers).map((key) => {
          const value = key;
          const blocksLeft = numbers[key];
          return (
            <InputBox
              selected={selectedNumber == value}
              onClick={() => onClick(value)}
              key={`input-box-${value}-${blocksLeft}`}
              number={value}
              blocksLeft={blocksLeft}
            />
          );
        })}
      </div>
      <div className='flex flex-col gap-3'>
        <button
          id='burst-selection-mode'
          onClick={() => {
            if (mode == 'selection') {
              setSelectedNumber(1);
              setMode('burst');
            } else {
              setSelectedNumber(null);
              setMode('selection');
            }
          }}
          className={`relative max-w-72 w-full px-4 py-3 rounded-lg font-secondary text-base font-semibold transition-all duration-300 cursor-pointer border-2 ${
            mode === 'burst'
              ? 'bg-error-500 hover:bg-error-600 text-shade-50 border-error-700 shadow-lg shadow-error-500/30 scale-[1.02]'
              : 'bg-gradient-to-br from-primary-50 to-primary-100 hover:from-primary-100 hover:to-primary-200 text-primary-800 border-primary-200 hover:border-primary-300 hover:shadow-md'
          }`}
        >
          <span className='flex items-center justify-center gap-2'>
            {mode === 'burst' ? (
              <svg
                className='w-5 h-5 animate-pulse'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z' />
              </svg>
            ) : (
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
                />
              </svg>
            )}
            {mode === 'burst' ? 'Burst Mode Active' : 'Enable Burst Mode'}
          </span>
        </button>
        <button
          onClick={() => {
            if (mode == 'burst') {
              setSelectedNumber((prev) => (prev == -1 ? null : -1));
            } else {
              setSelectedNumber(null);
              onClick(-1);
            }
          }}
          id='eraser-mode'
          className={`relative max-w-72 w-full px-4 py-3 rounded-lg font-secondary text-base font-semibold transition-all duration-300 cursor-pointer border-2 ${
            selectedNumber === -1
              ? 'bg-error-500 hover:bg-error-600 text-shade-50 border-error-700 shadow-lg shadow-error-500/30 scale-[1.02]'
              : 'bg-gradient-to-br from-primary-50 to-primary-100 hover:from-primary-100 hover:to-primary-200 text-primary-800 border-primary-200 hover:border-primary-300 hover:shadow-md'
          }`}
        >
          <span className='flex items-center justify-center gap-2'>
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
              />
            </svg>
            {mode == 'burst' ? 'Eraser Mode' : 'Erase'}
          </span>
        </button>
      </div>
    </div>
  );
});
