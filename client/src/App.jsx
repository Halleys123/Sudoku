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
        <Toggle
          options={[
            { label: 'Option 1', value: 'opt1' },
            { label: 'Option 2', value: 'opt2' },
            { label: 'Option 2', value: 'opt3' },
          ]}
          selected={'opt1'}
          setSelected={() => {}}
        />
        {/* <SudokuLayout /> */}
      </GameLayout>
    </GeneralLayout>
  );
}

export default App;
