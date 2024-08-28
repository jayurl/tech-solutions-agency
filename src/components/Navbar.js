import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ios-apps">iOS Apps</Link></li>
            <li><Link to="/chrome-extensions">Chrome Extensions</Link></li>
            <li><Link to="/automating-bots">Automating Bots</Link></li>
            <li><Link to="/web-apps">Web Apps</Link></li>
            <li><Link to="/security">Security</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </nav>
);

export default Navbar;
