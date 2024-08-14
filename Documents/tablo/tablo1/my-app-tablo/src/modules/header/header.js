import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HamburgerIconSVG } from './../../assets/img/hamburger-icon.svg';
import './header.css';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="left-section">
        <div className="logo"> <Link to="/">Tablo</Link></div>
        <nav className="menu">
          <a href="#tools">Tools</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className="hamburger-menu" id="hamburger-menu" onClick={toggleMenu}>
          <HamburgerIconSVG className="svg-hamburger-icon" />
        </div>
        <nav className={`mobile-menu ${isMenuOpen ? 'show' : ''}`} id="mobile-menu">
          <a href="#tools">Tools</a>
          <a href="#pricing">Pricing</a>
          <button className="login-button">Log in</button>
          <button className="join-button">Join us</button>
        </nav>
      </div>
      <div className="auth-buttons">
        <button className="login-button">Log in</button>
        <button className="join-button">Join us</button>
      </div>
    </header>
  );
};

export default Header;
