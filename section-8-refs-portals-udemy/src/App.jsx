import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge";

function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
      <TimerChallenge title="Easy" targetTime={1} />
      <TimerChallenge title="Medium" targetTime={5} />
      <TimerChallenge title="Hard" targetTime={10} />
      <TimerChallenge title="Pro" targetTime={15} />
    </>
  );
}

export default App;
