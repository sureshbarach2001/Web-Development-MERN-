import logo from "./fast.png";
import "./App.css";
import MyButton from "./components/Button.js";
import Profile from "./components/Gallary.js";
import Cunt from "./components/Counter.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>21F-9516 <br /> Suresh Kumar</p>
        <a
          className="App-link"
          href="https://email.com"
          target="_blank"
          rel="noopener noreferrer"
        ><span>F219516@cfd.nu.edu.pk</span>
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton />
        <Profile />
        <Cunt />
      </header>
    </div>
  );
}

export default App;
