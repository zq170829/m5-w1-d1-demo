import logo from './logo.svg';
import './App.css';
import { Button } from 'bootstrap';
// import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="btn btn-danger"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Button color ="danger">Danger!</Button> */}
      </header>
    </div>
  );
}

export default App;
