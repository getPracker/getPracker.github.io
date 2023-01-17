import React, {useState} from 'react';
import './SkillCard.css';

function SkillCard(props){

    const {data} = props;
    return (
        <div className='skill-card-container'>
            <div className='skill-img'><img src={data.url} alt={data.title}></img></div>
            <div className='skills-bar'>
                <div className="skill" style={{width: ((data.level/10)*100 )*60/100 }}></div>
            </div>
        </div>
    )
}


export default SkillCard;