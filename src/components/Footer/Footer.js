import React from "react";
import instagram from '../../assests/instagram.svg';
import linkedin from '../../assests/linkedin.svg';
import github from '../../assests/github.svg';
import youtube from '../../assests/youtube.svg';
import './Footer.css';


function Footer(){

    return (
      <footer className="inline-grid-row footer-container">
        <div className="inline-grid-col text footer-item">
          <div className="inline-grid-col text-item">Follow Me!</div>
          <div className="ver"></div>
          <div className="inline-grid-col text-item">@getPracker</div>
        </div>
        <ul className="inline-grid-col footer-item">
            <li> <a href="https://www.instagram.com/getPracker/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram"></img></a></li>
            <li className="inline-grid-col"><a className="inline-grid-col" href="https://www.linkedin.com/in/getPracker/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn"></img></a></li>
            <li className="inline-grid-col"><a className="inline-grid-col" href="https://github.com/getpracker" target="_blank" rel="noopener noreferrer"><img src={github} alt="Github"></img></a></li>
            <li className="inline-grid-col"><a className="inline-grid-col" href="https://www.youtube.com/@getPracker" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="Youtube"></img></a></li>
        </ul>
      </footer>
    );
}

export default Footer;