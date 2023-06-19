import React from 'react';
import { NavLink } from 'react-router-dom';
//import LandingNav from

const Landing = () =>{
    return(
        <div className='component-box'>
            <div className="landing">
                <button className='btn'><NavLink to='/home' className='btn-link'>Go to edick</NavLink></button>
            </div>
        </div>
    )
}

export default Landing;