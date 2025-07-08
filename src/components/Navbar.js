import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../components/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo" data-aos="zoom-in" data-aos-duration="1000">
          <span>Prashanth</span>
        </div>
        <div className="links">
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about-section" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact-container" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
        <div className="hamburg" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      <div className={`dropdown ${isOpen ? "active" : ""}`}>
        <div className="links">
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#about-section" onClick={toggleMenu}>About</a>
          <a href="#skills" onClick={toggleMenu}>Skills</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#contact-container" onClick={toggleMenu}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;