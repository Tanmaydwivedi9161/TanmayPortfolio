import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./index.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-heading">Let's Connect</p>
      <p className="footer-contact">
        <FaMapMarkerAlt style={{ marginRight: "6px" }} />
        India &nbsp;&nbsp;|&nbsp;&nbsp;
        <FaEnvelope style={{ margin: "0 6px" }} />
        tanmaydwivedi6191@gmail.com
      </p>

      <div className="footer-icons">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://x.com/Tanmaydwivedi91" target="_blank" rel="noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/tanmaydwivedi9161/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Tanmaydwivedi9161" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
      </div>

      <p className="footer-copy">© {currentYear} Tanmay. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
