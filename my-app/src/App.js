/*import './App.css';
import {Home} from './Home';
import {Kategoria} from './Kategoria';
import {Libri} from './Libri';
import { BrowserRouter as Router, Route, Routes,NavLink } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
      Our Library </h3>
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/kategoria">
              Category
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/libri">
              Books
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/kategoria" element={<Kategoria/>}/>
        <Route path="/libri" element={<Libri/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;*/
//import logo from './logo.svg';
import './App.css';
import Home from './pages';
//import NavBar from './components/NavBar';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Home/>
    </Router>
  );
}

export default App;
