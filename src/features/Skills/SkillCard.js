import React from 'react';
import './SkillCard.css';

function SkillCard(props){

    const {data} = props;
    return (
        <div className='skill-card-container'>
            <div className='skill-img'><img src={data.url} alt={data.title}></img></div>
            <div className='skills-bar'>
                <div className="skill" style={{width: ((data.level/10)*100 )*80/100 }}></div>
            </div>
            <div className='skills-name'>
                <p>{data.title}</p>
            </div>
        </div>
    )
}


export default SkillCard;