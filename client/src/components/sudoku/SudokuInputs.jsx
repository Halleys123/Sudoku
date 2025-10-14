import InputBox from './InputBox';
export default function SudokuInputs({ onClick }) {
  const numbers = [
    { blocksLeft: 3, value: 1 },
    { blocksLeft: 2, value: 2 },
    { blocksLeft: 0, value: 3 },
    { blocksLeft: 1, value: 4 },
    { blocksLeft: 4, value: 5 },
    { blocksLeft: 2, value: 6 },
    { blocksLeft: 3, value: 7 },
    { blocksLeft: 1, value: 8 },
    { blocksLeft: 2, value: 9 },
  ];

  return (
    <div className='flex flex-row gap-5 items-center justify-center'>
      {numbers.map(({ blocksLeft, value }) => (
        <InputBox
          onClick={() => onClick(value)}
          key={value}
          number={value}
          blocksLeft={blocksLeft}
        />
      ))}
    </div>
  );
}
