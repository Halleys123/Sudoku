import SudokuBox from './SudokuBox';
import SudokuInputs from './SudokuInputs';
import { useState } from 'react';

export default function SudokuLayout() {
  const [mode, setMode] = useState('selection'); // continuous-input | note | selection

  return (
    <div className='flex flex-col gap-4'>
      <SudokuBox />
      <SudokuInputs />
    </div>
  );
}
