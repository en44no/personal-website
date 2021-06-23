import React from 'react';
import '../css/Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Nahuel Márquez</h1>
        <h2>Piriápolis, Uruguay</h2>
        <div className="footer-contact">
          <h3>You can contact me by clicking on the following buttons</h3>
          <p></p>
        </div>
        <div className="sns-links">
          <a
            href="https://www.linkedin.com/in/nahuelmarquez/"
            target="_blank"
            rel="noreferrer"
            title="Clicking here you will be redirected to my Linkedin account"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a
            href="https://github.com/en44no"
            target="_blank"
            rel="noreferrer"
            title="Clicking here you will be redirected to my GitHub account"
          >
            <i className="fab fa-github github"></i>
          </a>
          <a
            href="mailto:nahuelmarquez12@gmail.com"
            target="_blank"
            rel="noreferrer"
            title="Clicking here you can send me an email to 'nahuelmarquez12@gmail.com'"
          >
            <i className="fas fa-envelope email"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
