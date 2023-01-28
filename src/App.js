import './App.css';
import smell_that from './svgs/smellthat.svg';
import logo from './svgs/Logo.svg'

function App() {
  return (
    <div className="App">
      <img className="smellthat" src={smell_that} alt="smell_that"></img>
      <div className="fill">
        <img className="logo_text" src={logo}></img>
      </div>
    </div>
  );
}

export default App;
