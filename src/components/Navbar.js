import React from 'react'
import { SiWikipedia } from 'react-icons/si'

import './Navbar.scss'

const Navbar = () => {
    return (
        <div className="navbar">
            <SiWikipedia size={25}/> &nbsp; This Day in History
        </div>
        );
}

export default Navbar; 