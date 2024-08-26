
import {ReactComponent as DividerSVG} from './../../assets/img/divider.svg'
import {ReactComponent as ButtonFooterSVG} from './../../assets/img/button-footer.svg'
import { Link, useNavigate } from 'react-router-dom';
import { HashLink} from 'react-router-hash-link';


export const Footer = () => {

    const navigate = useNavigate();
  
  const handleLoginClick = () => {
    navigate('/login');
 
  };
 
  const handleJoinusClick = () => {
    navigate('/joinus');
  };


return (

<div>
<DividerSVG class="svg-divider"/>

<footer class="site-footer">
    <div class="footer-content">
        <header class="header">
            <div class="left-section">
            <div className="logo"> <Link to="/">Tablo</Link></div>
            </div>
            <div class="foo-auth-buttons">    
          <button className="foo-login-button" onClick={handleLoginClick}>Log in</button>
          <button className="foo-join-button" onClick={handleJoinusClick}>Join us</button>
            </div>
        </header>
    
       

        <div class="footer">
        <footer class="footer">
            <div class="footer-section1-links1">
            <div className="h15"> <HashLink to="/#Section2">Tools</HashLink></div>
                <ul class="footer-links-list">

 

                <div className="footer-link"> <HashLink to="/#Section2">Workflow</HashLink></div>
                <div className="footer-link"> <HashLink to="/#Section3">Teamline</HashLink></div>
                <div className="footer-link"> <HashLink to="/#Section4">Pain points</HashLink></div>
                </ul>
            </div>



            <div class="footer-section2-links2">
            <div className="h16"> <HashLink to="/pricing#pri-Section2">Pricing</HashLink></div>
                <ul class="footer-links-list">
                <div className="footer-link"> <HashLink to="/pricing#pri-Section2">Monthly plans</HashLink></div>
                <div className="footer-link"> <HashLink to="/pricing#pri-Section3">Resources</HashLink></div>
               
                </ul>
            </div>

            <div class="footer-section3-links3">
            <div className="h17"> <Link to="/">Contact</Link></div>
                <ul class="footer-links-list">
                <div className="footer-link"> <Link to="https://www.facebook.com/">Facebook</Link></div>
                <div className="footer-link"> <Link to="https://www.instagram.com/">Instagram</Link></div>
                <div className="footer-link"> <Link to="https://x.com/tweeter">Tweeter</Link></div>
                </ul>
            </div>



  
        <div class="subscription-box">
            <h18>Subscribe to the Tablo</h18>
            <p>Newsletter to stay up to date with the lashes releases</p>
            <form id="subscription-form" action="#" method="post">
                <div class="input-with-button">
                    <input type="email" name="email" placeholder="@ Email address" required=""/>
                    <button type="submit" class="svg-button">
                        <ButtonFooterSVG className="svg-icon"/>
                    </button>
                </div>
            </form>
      </div>
    </footer></div>
</div></footer>
</div>








    )
}
export default Footer;