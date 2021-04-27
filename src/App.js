import './App.css';
import Grid from './Components/Grid/Grid';
import ScoreCount from './Components/ScoreCount/ScoreCount';

function App() {
  return (
    <div className='App'>
      <h1>Noughts and Crosses</h1>
      <ScoreCount />
      <Grid />
    </div>
  );
}

export default App;
