import React from "react"
import NavItem from './NavItem';
import './NavBar.css';
import "../../index.css";
import  logo from "../../assests/logo.svg";


function NavBar(){
    const prakhar = "PRAKHAR GUPTA";
    return (
      <nav className="inline-grid-col"  id="nav">
        <div className="nav-left">
          <img className="nav-img inline-grid-col" src={logo} alt="getPracker"></img>
          <h1 className="nav-title">{prakhar}</h1>
        </div>
        <div className="nav-right">
          <NavItem val={false}/>
        </div>
      </nav>
    );
}

export default NavBar;