import { memo } from 'react';
import InputBox from './InputBox';
import Toggle from '@components/Toggle.jsx';
import GroupToggle from '@components/GroupToggle.jsx';

const highlightOptions = [
  { label: 'Row', value: 'row' },
  { label: 'Column', value: 'column' },
  { label: 'Same', value: 'sameValue' },
];

export default memo(function SudokuInputs({
  onClick,
  numbers,
  inputMode,
  setInputMode,
  burstMode,
  setBurstMode,
  selectedNumber,
  setSelectedNumber,
  eraseCell,
  useHighlight,
  setUseHighlight,
}) {
  let options;
  if (burstMode) {
    options = [
      {
        label: 'Erase',
        value: 'erase',
      },
      {
        label: 'Input',
        value: 'input',
      },
      {
        label: 'Note',
        value: 'note',
      },
    ];
  } else {
    options = [
      {
        label: 'Input',
        value: 'input',
      },
      {
        label: 'Note',
        value: 'note',
      },
    ];
  }

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
        <Toggle
          key={burstMode ? 'burst-mode-toggle' : 'normal-mode-toggle'}
          options={options}
          selected={inputMode}
          setSelected={(mode) => {
            setInputMode(mode);
            if (!burstMode || mode === 'erase') {
              setSelectedNumber(null);
              return;
            }
            if (selectedNumber) return;
            setSelectedNumber(1);
          }}
        />
        <button
          id='burst-selection-mode'
          onClick={() => {
            if (!burstMode) {
              setSelectedNumber(1);
              setBurstMode(true);
            } else {
              setInputMode('input');
              setSelectedNumber(null);
              setBurstMode(false);
            }
          }}
          className={`relative max-w-72 w-full px-4 py-3 rounded-lg font-secondary text-base font-semibold transition-all duration-300 cursor-pointer border-2 ${
            burstMode
              ? 'bg-error-500 hover:bg-error-600 text-shade-50 border-error-700 shadow-lg shadow-error-500/30 scale-[1.02]'
              : 'bg-gradient-to-br bg-shade-50 hover:bg-shade-100 text-shade-800'
          }`}
        >
          <span className='flex items-center text-md font-primary justify-center gap-2'>
            {burstMode ? (
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
            {burstMode ? 'Burst Mode Active' : 'Enable Burst Mode'}
          </span>
        </button>{' '}
        {!burstMode && (
          <button
            id='burst-selection-mode'
            onClick={eraseCell}
            className={`relative max-w-72 w-full px-4 py-3 rounded-lg font-secondary text-base font-semibold transition-all duration-300 cursor-pointer border-2 ${
              burstMode
                ? 'bg-error-500 hover:bg-error-600 text-shade-50 border-error-700 shadow-lg shadow-error-500/30 scale-[1.02]'
                : 'bg-gradient-to-br bg-shade-50 hover:bg-shade-100 text-shade-800'
            }`}
          >
            <span className='flex items-center text-md font-primary justify-center gap-2'>
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
                  d='M19 21H5a2 2 0 01-2-2v-1.586a2 2 0 01.586-1.414l9-9a2 2 0 012.828 0l3.586 3.586a2 2 0 010 2.828l-9 9A2 2 0 015 21z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M7 17l8-8'
                />
              </svg>
              Erase
            </span>
          </button>
        )}
        {useHighlight && typeof setUseHighlight === 'function' && (
          <div
            style={{
              display: !selectedNumber ? 'flex' : 'none',
            }}
            className='flex flex-col gap-2 pt-2'
          >
            <span className='text-sm font-semibold font-secondary text-neutral-600 uppercase tracking-wide'>
              Highlights
            </span>
            <GroupToggle
              options={highlightOptions}
              activeMap={useHighlight}
              onToggle={(value) => {
                setUseHighlight((prev) => ({
                  ...prev,
                  [value]: !prev[value],
                }));
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
});
