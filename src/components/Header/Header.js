import React from 'react';
import "./Header.css";
import back from '../../assests/back.gif';


function Header(){
    return (
        <>
        <header>
            <div><img src={back} alt="background-vid"/></div>
            <div className='header-content'>
                <p className="header-item">Hie! Welcome to my website... 
                 Hope you enjoy it</p>
                <button className='header-item'>Hire me ?</button>
            </div>
        </header>
        </>
    )
};


export default Header;