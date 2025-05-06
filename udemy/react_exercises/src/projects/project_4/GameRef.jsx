import './styles/game.css';

import TimerChallenge from './components/TimerChallenge.jsx';

import Player from './components/Player.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title = "Easy" targetTime={1} />
        <TimerChallenge title = "Not easy" targetTime={5} />
        <TimerChallenge title = "Getting tough" targetTime={10} />
        <TimerChallenge title = "Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
