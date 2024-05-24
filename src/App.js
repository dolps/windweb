import logo from './logo.svg';
import bcImg from './mill.HEIC'
import './App.css';
import SpotList from './component/SpotList';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <img src={bcImg} className="App-logo" alt="logo"  >
            
          </img>
          <SpotList />
        </header>

      </div>
    </ChakraProvider>

  );
}

export default App;
