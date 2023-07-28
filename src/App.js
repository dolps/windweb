import logo from './logo.svg';
import './App.css';
import SpotList from './component/SpotList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Spots
        </p>
        <SpotList/>
      </header>

    </div>
  );
}

export default App;
