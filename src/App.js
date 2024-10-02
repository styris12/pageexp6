import './App.css';
import Home from './Home';
import Contact from './Contact';
import Session from './Session';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <Router>
    <div className="App">
      <header className='App-header'>
        <h1>MY SINGLE PAGE APPLICATION</h1>
        <nav className='navbar'>
          <div><b>INTERNET PROGRAMMING</b>
          <Link to="/">Home</Link>
          <Link to="/session">Session</Link>
          <Link to="/contact">Contact</Link>
          </div>
          <div>
          <FontAwesomeIcon icon={faFacebook}/>
          <FontAwesomeIcon icon={faYoutube}/>
          <FontAwesomeIcon icon={faInstagram}/>
          </div>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/session" element={<Session/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
      <footer className="footer">
        <p>Made by Styris</p>
      </footer>
    </div>
    </Router>
  );
}

export default App;
