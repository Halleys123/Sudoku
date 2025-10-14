import GameLayout from '@layouts/GameLayout.jsx';
import GeneralLayout from '@layouts/GeneralLayout.jsx';
import SudokuLayout from '@components/sudoku/SudokuLayout.jsx';
import MessageContainer from '@components/message/MessageContainer.jsx';

function App() {
  return (
    <GameLayout>
      <MessageContainer />
      <SudokuLayout />
    </GameLayout>
  );
}

export default App;
