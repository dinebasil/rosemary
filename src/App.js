import './App.css';
import 'animate.css';
import logo from './svgs/Logo.svg'

function App() {
  return (
    <div className="App">
      <div className="text">
        <h1 class="animate__animated animate__fadeInDown">smell that?</h1>
        <h1 class="animate__animated animate__fadeInDown animate__delay-1s">something's <span>cooking...</span></h1>
      </div>
      <div className="fill animate__animated animate__fadeIn animate__delay-2s">
        <img className="logo_text" src={logo}></img>
      </div>
    </div>
  );
}

export default App;
