import React from "react";
import Carrito from "./Carrito";
import logo from "../assets/imgenes/logo.png"
function NavBar() {
  return (
    <header className="nav">
      <div className="nav__center container">
        <div className='nav_logo'>
           <img src={logo} className="App-logo" alt="logo" />
        </div>
      <Carrito/>
      
      <ul className="nav__list">
        <li className="item">
          <a
            className="link"
            href="https:"
          >
            PC armada
          </a>
        </li>
        <li className="item">
        <a
            className="link"
            href="https:"
          >
            Notebook
          </a>
        </li>
        <li className="item">
        <a
            className="link"
            href="https:"
          >
            Componentes
          </a>
        </li>
        <li className="item">
        <a
            className="link"
            href="https:"
          >
            Perifericos
          </a>
        </li>
      </ul>
      </div>
        
    </header>
  );
}

export default NavBar;
