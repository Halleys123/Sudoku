import InputBox from './InputBox';
export default function SudokuInputs({
  onClick,
  numbers,
  mode,
  setMode,
  selectedNumber,
  setSelectedNumber,
  setSelectedCell,
}) {
  return (
    <div className='flex flex-col items-center gap-6'>
      <div className='grid grid-cols-3 gap-5 h-fit'>
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
      <button
        onClick={() => {
          if (mode == 'selection') {
            setSelectedNumber(1);
            setSelectedCell([-1, -1]);
            setMode('burst');
          } else {
            setSelectedNumber(null);
            setSelectedCell([1, 1]);
            setMode('selection');
          }
        }}
        className={`w-full px-4 py-2 rounded-lg transition-colors cursor-pointer ${
          mode === 'burst'
            ? 'bg-primary-400 hover:bg-primary-500 text-shade-50 ring-2 ring-error-500'
            : 'bg-primary-50 hover:bg-primary-100 text-primary-800'
        }`}
      >
        Burst Mode
      </button>
    </div>
  );
}
