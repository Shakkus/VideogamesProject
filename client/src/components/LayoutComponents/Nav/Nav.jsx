import React from "react";

import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <nav className="navHome">
                <div className="icon-box">
                    EDICK
                </div>
            </nav>

            <div className="linksNav">
                <h4 className="link"> <NavLink to='/home'> Home</NavLink> </h4>
                <h4 className="link"> <NavLink to='/createGame'> Create Videogame</NavLink> </h4>
            </div>
        </>
    )
}

export default Nav;