import React from "react";
import instagram from '../../assests/instagram.svg';
import linkedin from '../../assests/linkedin.svg';
import github from '../../assests/github.svg';
import youtube from '../../assests/youtube.svg';


function Footer(){

    return (
      <>
      <footer>
        <div className="inline footer-container">
            <div className="footer-item"><p>@getPracker</p></div>
            <div className="footer-item">copyright</div>
            <hr className="solid"></hr>
            <ul className="inline social-link-list footer-item">
                <li><a href="https://www.instagram.com/getPracker/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram"></img></a></li>
                <li><a href="https://www.linkedin.com/in/getPracker/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn"></img></a></li>
                <li><a href="https://github.com/getpracker" target="_blank" rel="noopener noreferrer"><img src={github} alt="Github"></img></a></li>
                <li><a href="https://www.youtube.com/@getPracker" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="Youtube"></img></a></li>
            </ul>
        </div>
      </footer>
      </>
    );
}

export default Footer;