import React from 'react';
import { NavLink } from 'react-router-dom';
import './landing.css'

const Landing = () =>{
    return(
        <div className='component-box'>


                <button className='btn'>
                    <NavLink to='/home' className='btn-link'>
                        Go to edick
                    </NavLink>
                </button>
        </div>
    )
}

export default Landing;