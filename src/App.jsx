// import logo from './logo.svg';
import './App.css';
import iPhone from './iPhone.png';
import logoFood4you from './logoFood4you.png';
import Leaf1 from "./Leaf1.png";
import Noodlesplate from "./Noodles plate.png"
// import Menu from './menu';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header1">
          <img src={logoFood4you} alt='logofood'/>
        </div>
        <div className="App-header2">
          <h2>EXPRESS DELIVERY</h2>
          <h2>1800 258 888</h2>
        </div>
        <div className="image-iphone">
          <img src={iPhone} alt='iPhone'/>
        </div>  
      </header>
      <nav className="App-navbar">
        <li><Link to={"/App"}>HOME</Link></li>
        <li><Link to={"/menu"}>MENU</Link></li>
        <li><Link to={"/sample"}>OUR STORY</Link></li>
        <li><Link to={"/Form"}>CONTACT US</Link></li>
        <li><Link to={"/Signup"}>SIGN UP</Link></li>
        <li><Link to={"/datapass"}>DATAPASS</Link></li>

      </nav>
      <div className="App-content">
        <img className='App-leaf1' src={Leaf1} alt='Leaf'/>
        <p className="App-p1">Are you Hungry</p>
        <p className="App-p2">DONT WAIT!</p>
        <p className="App-p3">LET START TO ORDER FOOD NOW</p>
        <hr></hr>
        <p className="App-p4">THIS MONDAY<br></br>HAPPY HOURS</p>
        <p className='App-p5'>1+1=3</p>
        <button className='App-btn-1'>ORDER NOW</button>
        <img className="Noodles-plate" src={Noodlesplate} alt='noodles plate'/>
      </div>
    </div>
  );
}

export default App;
