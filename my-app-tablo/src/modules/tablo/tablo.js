import React from 'react';
import './tablo.css';
import {ReactComponent as DividerSVG} from './../../assets/img/divider.svg'

export const Tablo = () => {



  return (
    <div className="tablo">
      <div className="background-pattern"></div>
      
      <header className="header">
        <div className="left-section">
          <div className="logo">Tablo</div>
          <nav className="menu">
            <a href="#tools">Tools</a>
            <a href="#pricing">Pricing</a>
          </nav>
          <div className="hamburger-menu" id="hamburger-menu">
            <img src="hamburger-icon.svg" alt="hamburger-icon" className="hamburger-icon" id="hamburger-icon"/>
            <nav className="mobile-menu" id="mobile-menu">
              <a href="#tools">Tools</a>
              <a href="#pricing">Pricing</a>
              <button className="login-button">Log in</button>
              <button className="join-button">Join us</button>
            </nav>
          </div>
        </div>
        <div className="auth-buttons">
          <button className="login-button">Log in</button>
          <button className="join-button">Join us</button>
        </div>
      </header>

      <DividerSVG className="svg-divider"/>

      <section className="Section1" data-block="Section1">
        <div className="make-goal"></div>
        <h1 id="make-goal-heading" className="make-goal__heading-text heading-xl" aria-hidden="true">
          <span className="make-goal__animate">M</span>
          <span className="make-goal__animate">a</span>
          <span className="make-goal__animate">k</span>
          <span className="make-goal__animate">e</span>
          <span className="make-goal__animate">&nbsp;</span>
          <span className="make-goal__animate">a</span>
          <span className="make-goal__animate">&nbsp;</span>
          <span className="make-goal__animate">g</span>
          <span className="make-goal__animate">o</span>
          <span className="make-goal__animate">a</span>
          <span className="make-goal__animate">l</span>
        </h1>
        {/* Pozostałe elementy HTML */}
      </section>

      <div className="window"> 
        <img src="window1.svg" alt="Window1" className="svg-window1"/>
        <img src="window2.svg" alt="Window2" className="svg-window2"/>
        <img src="window3.svg" alt="Window3" className="svg-window3"/>
      </div>

      <div className="next-section">
        <button className="svg-button">
          <img src="next-section.svg" alt="Next Section" className="svg-icon"/>
        </button>
      </div>

      {/* Kontynuacja sekcji 2, 3, 4 itd. */}
      
      <footer className="site-footer">
        <div className="footer-content">
          <header className="header">
            <div className="left-section">
              <div className="logo">Tablo</div>
            </div>
            <div className="auth-buttons">
              <button className="login-button">Log in</button>
              <button className="join-button">Join us</button>
            </div>
          </header>

          <div className="footer">
            <div className="footer-section1-links1">
              <h5>Tools</h5>
              <ul className="footer-links-list">
                <li><a href="#workflow" className="footer-link" id="workflow">Workflow</a></li>
                <li><a href="#teamline" className="footer-link" id="teamline">Teamline</a></li>
                <li><a href="#pain-points" className="footer-link" id="pain-points">Pain points</a></li>
              </ul>
            </div>
            {/* Pozostałe sekcje footer */}
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2024 tablo.com | Designed by Patrycia
        </div>
      </footer>
    </div>
  );
}

export default Tablo;
