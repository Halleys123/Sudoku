import GameLayout from '@layouts/GameLayout.jsx';
import GeneralLayout from '@layouts/GeneralLayout.jsx';
import SudokuLayout from '@components/sudoku/SudokuLayout.jsx';
import MessageContainer from '@components/message/MessageContainer.jsx';
import Toggle from '@components/Toggle.jsx';

function App() {
  return (
    <GeneralLayout>
      <GameLayout>
        <MessageContainer />
        <SudokuLayout />
      </GameLayout>
    </GeneralLayout>
  );
}

export default App;
