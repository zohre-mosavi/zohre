import logo from './logo.svg';
import './App.css';
import './jsxtext.js';
import Person from './jsxtext.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Person character = "zohre"/>
      </header>
      

    </div>
  );
}

export default App;
