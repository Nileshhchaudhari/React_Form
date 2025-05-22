import React, { useState } from 'react';
import './assets/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    TravelWorld
                </a>

                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a href="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/destinations" className="nav-links" onClick={closeMobileMenu}>
                            Destinations
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/packages" className="nav-links" onClick={closeMobileMenu}>
                            Packages
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-links" onClick={closeMobileMenu}>
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact" className="nav-links" onClick={closeMobileMenu}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
