import GameLayout from '@layouts/GameLayout.jsx';
import GeneralLayout from '@layouts/GeneralLayout.jsx';
import SudokuBox from '@components/sudoku/SudokuBox.jsx';

function App() {
  return (
    <GameLayout>
      <SudokuBox />
    </GameLayout>
  );
}

export default App;
