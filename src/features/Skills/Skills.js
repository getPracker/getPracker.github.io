import React, { useEffect } from 'react';
import { skills } from './SkillsData';
import SkillCard from './SkillCard';

function Skills(){

    return (
        <>
        <div className='skills-container' >
            <div className="languages inline">
                <h1>Languages</h1>
                    <ul className='skill-list'>
                        {skills.languages.map((item, idx) =>{
                            return <li key={idx}><SkillCard data={item}/></li>
                        }) }
                    </ul>
            </div>
            <div className="webdev inline">
                <h1>Webdev</h1>
                    <ul className='skill-list'>
                        {skills.webdev.map((item, idx) =>{
                            return <li key={idx}><SkillCard data={item}/></li>
                        }) }
                    </ul>
            </div>
            <div className="database inline">
                <h1>Database</h1>
                
                    <ul className='skill-list'>
                        {skills.database.map((item, idx) =>{
                            return <li key={idx}><SkillCard data={item}/></li>
                        }) }
                    </ul>
            </div>
            <div className="tools inline">
                <h1>Tools</h1>
                    <ul className='skill-list'>
                        {skills.tools.map((item, idx) =>{
                            return <li key={idx}><SkillCard data={item}/></li>
                        }) }
                    </ul>
            </div>
        </div>
        </>
    )
};

export default Skills;