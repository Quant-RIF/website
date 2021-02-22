// import logo from './logo.svg';
import './App.css';
import quant_logo from './Quant\ Logo-128.png';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Quant Site</h1>
      <h2>From: The Quant Team</h2>
      <img src={quant_logo} alt="our-logo" />
    </div>
  );
}

/*
This was in app div previously
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
*/

export default App;
