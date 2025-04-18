import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../images/logo.jpg";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        } else if (location.pathname !== '/') {
            // If section not found and not on home page, first navigate to home
            window.location.href = '/#' + sectionId;
        }
    };

    // Listen for hash changes to scroll to section after navigation
    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash);
                element?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }, [location]);

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="navbar__menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`navbar_routes ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                    <li><button onClick={() => scrollToSection('about')}>About</button></li>
                    <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
                    <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
                    <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
