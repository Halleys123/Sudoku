import { Navigate, Route, Routes } from 'react-router-dom';
import GeneralLayout from '@layouts/GeneralLayout.jsx';
import MessageContainer from '@components/message/MessageContainer.jsx';
import Homepage from '@pages/Homepage.jsx';
import Competitive from '@pages/Competitive.jsx';
import Leaderboard from '@pages/Leaderboard.jsx';
import MyStats from '@pages/MyStats.jsx';
import SinglePlayer from '@pages/SinglePlayer.jsx';

function App() {
  return (
    <GeneralLayout>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/single-player' element={<SinglePlayer />} />
        <Route path='/competitive' element={<Competitive />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/my-stats' element={<MyStats />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <MessageContainer />
    </GeneralLayout>
  );
}

export default App;
