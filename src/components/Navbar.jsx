import React from "react";
import { useLocation } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
    const location = useLocation();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else if (location.pathname !== '/') {
            window.location.href = '/#' + sectionId;
        }
    };

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="desktop-navbar">
                <div className="navbar-content">
                    <div className="navbar-logo">
                        <span>N</span>
                    </div>
                    <div className="navbar-links">
                        <button onClick={() => scrollToSection('home')}>Home</button>
                        <button onClick={() => scrollToSection('about')}>About</button>
                        <button onClick={() => scrollToSection('skills')}>Skills</button>
                        <button onClick={() => scrollToSection('projects')}>Projects</button>
                        <button onClick={() => scrollToSection('contact')}>Contact</button>
                    </div>
                </div>
            </nav>

            {/* Mobile Dock */}
            <nav className="mobile-dock">
                <button onClick={() => scrollToSection('home')} className="dock-item">
                    <FaHome />
                    <span>Home</span>
                </button>
                <button onClick={() => scrollToSection('about')} className="dock-item">
                    <FaUser />
                    <span>About</span>
                </button>
                <button onClick={() => scrollToSection('skills')} className="dock-item">
                    <FaCode />
                    <span>Skills</span>
                </button>
                <button onClick={() => scrollToSection('projects')} className="dock-item">
                    <FaProjectDiagram />
                    <span>Projects</span>
                </button>
                <button onClick={() => scrollToSection('contact')} className="dock-item">
                    <FaEnvelope />
                    <span>Contact</span>
                </button>
            </nav>
        </>
    );
}

export default Navbar;
