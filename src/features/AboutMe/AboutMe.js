import React from 'react';
import './AboutMe.css';
import { exp, edu } from './AboutMeData';
import CardSwipe from './CardSwipe';

function AboutMe(){
    return (
        <>
        <div className='about-container about'>
            <ul className='list-container'>
                <li className='list-item title'><h1>ABOUT ME</h1></li>
                <li className='list-item'><p>I am a Full-stack developer, actively looking for roles in the same category. I like to play football and chess</p></li>
                <div className='about-content'>
                    <li className='list-item experience'>
                        <h1>EXPERIENCE</h1>
                        <div className='exp-container'>
                            <CardSwipe data={exp}/>
                        </div>
                    </li>
                    <li className='list-item education'>
                    <h1>EDUCATION</h1>
                    <div className='exp-container'>
                            <CardSwipe data={edu}/>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
        </>
    )
};

export default AboutMe;