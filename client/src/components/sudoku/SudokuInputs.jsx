import InputBox from './InputBox';
export default function SudokuInputs() {
  return (
    <div className='flex flex-row gap-3 items-center justify-center'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
        <InputBox key={num} number={num} />
      ))}
    </div>
  );
}
