import GameLayout from '@layouts/GameLayout.jsx';
import GeneralLayout from '@layouts/GeneralLayout.jsx';
import SudokuLayout from '@components/sudoku/SudokuLayout.jsx';

function App() {
  return (
    <GeneralLayout>
      <SudokuLayout />
    </GeneralLayout>
  );
}

export default App;
