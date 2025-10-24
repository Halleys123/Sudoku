import { Navigate, Route, Routes } from 'react-router-dom';

import GeneralLayout from '@layouts/GeneralLayout.jsx';
import GameLayout from '@layouts/GameLayout.jsx';

import MessageContainer from '@components/message/MessageContainer.jsx';

import MessageProvider from '@providers/MessageProvider.jsx';

import Homepage from '@pages/Homepage.jsx';
import Competitive from '@pages/Competitive.jsx';
import Leaderboard from '@pages/Leaderboard.jsx';
import MyStats from '@pages/MyStats.jsx';
import SinglePlayer from '@pages/SinglePlayer.jsx';
import Game from '@pages/Game.jsx';

function App() {
  return (
    <MessageProvider>
      <Routes>
        <Route element={<GeneralLayout />}>
          <Route path='/' element={<Homepage />} />
        </Route>
        <Route element={<GameLayout />}>
          <Route path='/single-player'>
            <Route index element={<SinglePlayer />} />
            <Route path=':gameId' element={<Game />} />
          </Route>
          <Route path='/competitive' element={<Competitive />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/my-stats' element={<MyStats />} />
        </Route>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <MessageContainer />
    </MessageProvider>
  );
}

export default App;
