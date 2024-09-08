
import {ReactComponent as HamburgerIconSVG} from './../../assets/img/hamburger-icon.svg'
import { Link, useNavigate } from 'react-router-dom';
import './header-app.css'
export const Header = () => {
  const navigate = useNavigate();
  
  const handleLogoutClick = () => {
    navigate('/');
 
  };
return (

    <header className="header">
    <div className="left-section">
      <div className="logo"> <Link to="/">Tablo</Link></div>
      <nav className="menu">
       <a href="#Section2">Tools</a>
        <Link to="/pricing" className="link">Pricing</Link>
      </nav>
      <div className="hamburger-menu" id="hamburger-menu">
        <HamburgerIconSVG className="svg-hamburger-icon"/>
        <nav className="mobile-menu" id="mobile-menu">
          <a href="#tools">Tools</a>
          <Link to="/pricing" className="link">Pricing</Link>
          </nav>
          <button className="logout-button" onClick={handleLogoutClick}>Log out</button>
       
      </div>
    </div>
    <div className="ap-auth-buttons">
    <button className="logout-button" onClick={handleLogoutClick}>Log out</button>
    </div>
  </header>



)



}
export default Header;