import InputBox from './InputBox';
export default function SudokuInputs({ onClick, numbers }) {
  return (
    <div className='flex flex-row gap-5 items-center justify-center'>
      {Object.keys(numbers).map((key) => {
        const value = key;
        const blocksLeft = numbers[key];
        return (
          <InputBox
            onClick={() => onClick(value)}
            key={value}
            number={value}
            blocksLeft={blocksLeft}
          />
        );
      })}
    </div>
  );
}
