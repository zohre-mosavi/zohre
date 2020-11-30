import logo from './logo.svg';
import './App.css';
// import './jsxtext.js';
// import Person from './jsxtext.js';
// import './test-1.js';
// import './test-2.js';
// import './test-3.js';
// import './test-4.js';
// import './test-5.js';
//....

// import './test-19.js';
import Child from './task1';

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

        <Child/>

      </header>
      

    </div>
  );
}

export default App;
