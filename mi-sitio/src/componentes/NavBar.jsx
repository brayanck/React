import React from "react";
import Carrito from "./Carrito";
import logo from "../assets/imgenes/logo.png"
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <header className="nav">
      <div className="nav__center container">
        <div className='nav_logo'>
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </div>
      <Carrito/>
      
      <ul className="nav__list">
        <li className="item">
          <Link to="/category/PC">PC</Link>
        </li>
        <li className="item">
        <Link to="/category/notebooks">Notebook</Link>
        </li>
        <li className="item">
        <Link to="/category/teclado">teclado</Link>
        </li>
        <li className="item">
        <Link to="/category/mause">mause</Link>
        </li>
      </ul>
      </div>
        
    </header>
  );
}

export default NavBar;
