import React from "react";
import './nav.css'

import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <div className="linksNav">
                <h4 className="link"> <NavLink to='/home' className='link'> Home</NavLink> </h4>
                <div className="title-container">
                    <h2>Eric</h2>
                </div>
                <h4 className="link"> <NavLink to='/createGame' className='link'> Create Videogame</NavLink> </h4>
            </div>
        </>
    )
}

export default Nav;