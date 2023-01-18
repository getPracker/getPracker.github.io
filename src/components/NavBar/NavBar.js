import React, { useState} from "react";
import {NavLink}  from 'react-router-dom';
import './NavBar.css';
import  logo from "../../assests/logo.svg";
import closeIcon from  '../../assests/xmark-solid.svg';
import  menuIcon from '../../assests/bars-solid.svg'; 

import menuData from "./MenuData";

function NavBar(){
    const prakhar = "PRAKHAR GUPTA";
    const [src, setSrc] = useState(menuIcon);
    const [isClicked, setIsClicked] = useState(false);
    const handleHover = (e) =>{
      if(e.type === 'mouseover'){
        e.target.style.color = 'grey';
      }else{
        e.target.style.color = 'black';
      }
    };
    
    const handleClick = (e) =>{
      if(src === menuIcon) {
        setIsClicked(true);
        setSrc(closeIcon);
      }else {
        setIsClicked(false);
        setSrc(menuIcon);
      }
    };

    return (
      <>
      <nav className="inline-grid-col">
        <div className="nav-left inline-grid-col">
          <img className="nav-logo" src={logo} alt="getPracker"></img>
          <h1 className="nav-title">{prakhar}</h1>
        </div>
        <div className="nav-right inline-grid-col">
          {!isClicked ? null : <ul className="inline-grid-col nav-bar">
          {!isClicked ? null : menuData.map((item, index)=>{
            return (
              <div className="inline-grid-col navbar-list-div"><li  key ={index} className={item.cName}><NavLink to={item.url}><p onMouseOver={handleHover} onMouseLeave={handleHover}><strong>{item.name}</strong></p></NavLink></li></div>
            )
          })}
          </ul>}
          <img src={src} className="inline-grid-col nav-icon" alt="menu-icon" onClick={handleClick}></img>
        </div>
      </nav>
      </>
    );
}

export default NavBar;