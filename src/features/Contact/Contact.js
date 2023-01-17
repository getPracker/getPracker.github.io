import React from 'react';
import './Contact.css';


function Contact(){
    return (
        <>
        <div className='title'><h1>Contact ME</h1></div>
        <form action='https://formspree.io/f/xzbqzeka' method="post">
            <div className='name inline form-item'>
                <div className='item'>Name:</div>
                <div className='item'><input name="name" type="text" required></input></div>
            </div>
            <div className='email inline form-item'>
                <div className='item'>Email:</div>
                <div className='item'><input name="email" type="email" required></input></div>
            </div>
            <div className='name inline form-item'>
                <div className='item'>Message:</div>
                <div className='item' ><textarea name="message" type="text" required></textarea></div>
            </div>
            <button value="submit">Submit</button>
        </form>
        </>
    )
};

export default Contact;