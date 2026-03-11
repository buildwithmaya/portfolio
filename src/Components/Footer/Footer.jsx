import React from 'react';
import './Footer.css';
import githubImage from "../../assets/icons8-github-30.png";
import linkedinImage from "../../assets/icons8-linkedin-30.png";
import xImage from "../../assets/icons8-x-30.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className='rights'>© 2025 Sheelah Mogaka. All rights reserved.</p>
        <div className="social-links">
          <a 
            href="https://github.com/buildwithmaya" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <img src={githubImage} alt="GitHub" />
          </a>

          <a 
            href="https://linkedin.com/in/sheelahmogaka" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <img src={linkedinImage} alt="LinkedIn" />
          </a>

          <a 
            href="https://x.com/sheelah7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <img src={xImage} alt="X" />
          </a>
        </div>
      </div>
    </footer>
  );
}