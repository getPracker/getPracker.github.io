import React from 'react';
import "./Header.css";
import resumeSrc from '../../assests/Prakhar_Gupta_Resume.pdf';


function Header(){
    const handleClick = ()=>{
        fetch('Prakhar_Gupta_Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                console.log(fileURL);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Prakhar_Resume2.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
        <header>  
            <div className='header-content'>
                <p className="header-item">Hie! Welcome to my website... 
                 Hope you enjoy it!</p>
                 <div className='button-group'>
                 <button className='header-item' onClick={handleClick}>Resume</button>
                 <button className='header-item'>Hire Me ?</button>
                 </div>
            </div>
        </header>
        </>
    )
};


export default Header;