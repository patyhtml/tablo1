
import {ReactComponent as HamburgerIconSVG} from './../../assets/img/hamburger-icon.svg'
import { Link } from 'react-router-dom';
export const Header = () => {

return (

    <header className="header">
    <div className="left-section">
      <div className="logo"> <Link to="/">Tablo</Link></div>
      <nav className="menu">
        <a href="#tools">Tools</a>
        <a href="#pricing">Pricing</a>
      </nav>
      <div className="hamburger-menu" id="hamburger-menu">
        <HamburgerIconSVG className="svg-hamburger-icon"/>
        <nav className="mobile-menu" id="mobile-menu">
          <a href="#tools">Tools</a>
          <a href="#pricing">Pricing</a>
          <button className="logout-button">Logout</button>
        </nav>
      </div>
    </div>
    <div className="auth-buttons">
      <button className="login-button">Logout</button>
    
    </div>
  </header>



)



}
export default Header;