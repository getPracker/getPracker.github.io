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
        e.target.style.color = '#000';
      }else{
        e.target.style.color = '#BDB76B';
      }
    };
    
    const handleClick = (e) =>{
      //console.log(e.target.src);
      if(src === menuIcon) {
        ///console.log("menu");
        setIsClicked(true);
        setSrc(closeIcon);
      }else {
        setIsClicked(false);
        setSrc(menuIcon);
      }
    };

    return (
      <>
      <nav>
        <div className="inline container">
          <div className="nav-left container">
            <div className="logo"><img src={logo} alt="getPracker"></img></div>
            <div className="title"><h1>{prakhar}</h1></div>
          </div>
          <div className="nav-right container">
            <ul className="inline navbar-container">
            {!isClicked ? null : menuData.map((item, index)=>{
              return (
                <li  key ={index} className={item.cName}><NavLink to={item.url}><p onMouseOver={handleHover} onMouseLeave={handleHover}>{item.name}</p></NavLink></li>
              )
            })}
            </ul>
            <div className="img">
              <img src={src} className="menu-icon" alt="menu-icon" onClick={handleClick}></img>
            </div>
          </div>
          
        </div>
      </nav>
      </>
    );
}

export default NavBar;