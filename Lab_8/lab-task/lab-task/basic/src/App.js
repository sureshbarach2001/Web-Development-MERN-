import logo from './NU.png';
import './App.css';
// import MyButton from  './components/users.js'
import Profile from './components/pict.js';
import ShoppingList from './components/shop.js';
let name = '21F-9519';

function application(){
    // setname("Rai Umer Farooq");
    name="Rai Umer Farooq"
    }
function MyButton() {
    
    return (
      <button onClick={application()}>
        I'm a button
      </button>
    );
  }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {name}  <br /> <span>f219519@cfd.nu.edu.pk</span>
        
        </p>
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
        <ShoppingList />
      </header>
    </div>
  );
}

export default App;
