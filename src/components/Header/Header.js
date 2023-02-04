import React from 'react';
import "./Header.css";
import "../../index.css";


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
        <div className='inline-grid-row header-container'>
            <p className="inline-grid-col header-item">Hie! Welcome to my website... 
                Hope you enjoy it!</p>
                <div className='button-group'>
                <button className='header-button ' onClick={handleClick}>Resume</button>
                <button className='header-button '>Hire Me ?</button>
                </div>
        </div>
    
        </>
    )
};


export default Header;