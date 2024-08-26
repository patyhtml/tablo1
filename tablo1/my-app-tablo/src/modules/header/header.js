import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HashLink} from 'react-router-hash-link';
import { ReactComponent as HamburgerIconSVG } from './../../assets/img/hamburger-icon.svg';
import './header.css';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate();
  
  const handleLoginClick = () => {
    navigate('/login');
 
  };
 
  const handleJoinusClick = () => {
    navigate('/joinus');
  };


  return (
    <header className="header">
      <div className="left-section">
        <div className="logo"> <Link to="/">Tablo</Link></div>
        <nav className="menu">
         
          <div className="a"> <HashLink to="/#Section2">Tools</HashLink></div>
          <Link to="/pricing" className="link">Pricing</Link>
        </nav>
        <div className="hamburger-menu" id="hamburger-menu" onClick={toggleMenu}>
          <HamburgerIconSVG className="svg-hamburger-icon" />
        </div>
        <nav className={`mobile-menu ${isMenuOpen ? 'show' : ''}`} id="mobile-menu">
          <a href="#tools">Tools</a>
          <Link to="/pricing" className="link">Pricing</Link>

          <button className="login-button" onClick={handleLoginClick}>Log in</button>
          <button className="join-button" onClick={handleJoinusClick}>Join us</button>
        </nav>
      </div>
      <div className="hed-auth-buttons">
        <button className="hed-login-button" onClick={handleLoginClick}>Log in</button>
        <button className="hed-join-button" onClick={handleJoinusClick}>Join us</button>
      </div>
    </header>
  );
};

export default Header;
