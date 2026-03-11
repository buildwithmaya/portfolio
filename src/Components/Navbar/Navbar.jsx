import React, { useState } from 'react';
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <nav className="navbar">
            <div className='page-logo'>Shee<span className='page-logo2'>lah</span></div>
            
            <div className="menu-toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <ul className={`nav-items ${menuOpen ? 'active' : ''}`}>
                <li>
                    <Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link>
                </li>
                <li>
                    <Link to="/about" className={isActive('/about')} onClick={closeMenu}>About</Link>
                </li>
                <li>
                  <Link to="/skills" className={isActive('/skills')} onClick={closeMenu}>Skills</Link>
                </li>
                <li>
                  <Link to="/projects" className={isActive('/projects')} onClick={closeMenu}>Projects</Link>
                </li>
                  <li>
                    <Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}