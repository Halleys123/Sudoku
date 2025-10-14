import InputBox from './InputBox';
export default function SudokuInputs({ onClick, numbers }) {
  return (
    <div className='grid grid-cols-3 gap-5 h-fit'>
      {Object.keys(numbers).map((key) => {
        const value = key;
        const blocksLeft = numbers[key];
        return (
          <InputBox
            onClick={() => onClick(value)}
            key={`input-box-${value}-${blocksLeft}`}
            number={value}
            blocksLeft={blocksLeft}
          />
        );
      })}
    </div>
  );
}
