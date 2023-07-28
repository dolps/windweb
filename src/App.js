import logo from './logo.svg';
import './App.css';
import SpotList from './component/SpotList';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Spots
          </p>
          <SpotList />
        </header>

      </div>
    </ChakraProvider>

  );
}

export default App;
