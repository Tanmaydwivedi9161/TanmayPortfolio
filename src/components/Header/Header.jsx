import React, { useState } from "react";
import { FaLinkedin, FaGithubSquare, FaBars, FaTimes } from "react-icons/fa";
import "./index.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <h3 className="logo">{`< Tanmay Dwivedi />`}</h3>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`navbar-list-items ${menuOpen ? "active" : ""}`}>
        <ul className="navbar-lists">
          <a href="#home"><li className="list-item">Home</li></a>
          <a href="#skills"><li className="list-item">Skills</li></a>
          <a href="#project"><li className="list-item">Projects</li></a>
          <a href="https://tanmay-blog-zeta.vercel.app/" target="_blank"><li className="list-item">Blogs</li></a>
          <a href="#contact"><li className="list-item">Contact</li></a>
        </ul>
      </div>

      <div className="social-icons">
        <a href="https://www.linkedin.com/in/tanmaydwivedi9161/" target="_blank" rel="noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/Tanmaydwivedi9161" target="_blank" rel="noreferrer">
          <FaGithubSquare className="icon" />
        </a>
      </div>
    </nav>
  );
};

export default Header;
