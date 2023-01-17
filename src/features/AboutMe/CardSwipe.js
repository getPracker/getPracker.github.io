import React, { useState } from 'react';
import './CardSwipe.css';

function CardSwipe(props){
    const { data } = props;
    const len = data.length;
    //console.log(len);
    const [currIdx, setCurrIdx] = useState(0);

    const handleNext = (e)=>{
        setCurrIdx((prev) =>{
            if(prev === len-1) return 0;
            else return prev + 1;
        });
    }

    const handleBack = (e)=>{
        setCurrIdx((prev) =>{
            if(prev === 0) return len-1;
            else return prev - 1;
        })
    }
    return (
        <>
        <div className='card-container'>
            <button onClick={handleBack}>{"<"}</button>
            <div className='card-content'>
            <div className='card-title'>{data[currIdx].title} {!data[currIdx].organization ? null:  <> {data[currIdx].organization}</>}</div>
            <div className='card-title2'>{data[currIdx].time}</div>
            <ul className='card-list'>
                {!data[currIdx].content ? null : data[currIdx].content.map((item, idx)=>{
                    return (
                        <li key={idx} className='card-list-item'>{item}</li>
                    )})}
                
                {!data[currIdx].grade ? null : <>
                
                  <div className='grade'>{data[currIdx].grade}</div>
                </>}
            </ul>
            </div>

            <button onClick={handleNext}>{">"}</button>
        </div>
        </>
    )
}


export default CardSwipe;