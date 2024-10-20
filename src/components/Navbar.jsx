// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { FaHome, FaCalendarAlt, FaBook, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <FaBook size={30} />
                <span>MSA Dalhousie</span>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/">
                        <FaHome /> Home
                    </Link>
                </li>
                <li>
                    <Link to="/events">
                        <FaCalendarAlt /> Events
                    </Link>
                </li>
                <li>
                    <Link to="/resources">
                        <FaBook /> Resources
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <FaInfoCircle /> About
                    </Link>
                </li>
                <li>
                    <Link to="/contactus">
                        <FaEnvelope /> Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
