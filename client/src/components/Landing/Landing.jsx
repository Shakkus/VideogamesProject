import React from 'react';
import { NavLink } from 'react-router-dom';
import './landing.css'


const Landing = () =>{
    return(
        <div className='component-box'>
                <h2>Bienvenidos a Eric</h2>
                <button className='btn'>
                    <NavLink to='/home' className='btn-link'>
                        Go to eric
                    </NavLink>
                </button>
        </div>
    )
}

export default Landing;