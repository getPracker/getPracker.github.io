import React, { useState} from "react";
import {NavLink}  from 'react-router-dom';
import closeIcon from  '../../assests/xmark-solid.svg';
import  menuIcon from '../../assests/bars-solid.svg'; 

import menuData from "./MenuData";

function NavItem(prop){
    const val = { prop };
    const [src, setSrc] = useState(menuIcon);
    const [isClicked, setIsClicked] = useState(false);
    
    const handleClick = (e) =>{
      console.log(e.target.className);
      if(src === menuIcon) {
        setIsClicked(false);
        setSrc(closeIcon);
      }else if(src === closeIcon) {
        setIsClicked(true);
        setSrc(menuIcon);
      }
    };

    return (
        <>
         { isClicked ? null : <ul className="nav-bar">
         {isClicked ? null : menuData.map((item, index)=>{
            return (
              <li  key ={index.toString()} className={item.cName}><NavLink to={item.url}><p><strong>{item.name}</strong></p></NavLink></li>
            );
          })}
        </ul>}
         {val === "true"? null : <img src={src} className="inline-grid-col nav-icon" alt="menu-icon" onClick={handleClick}></img>}
        </>
    );
}

export default NavItem;