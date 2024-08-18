
import {ReactComponent as DividerSVG} from './../../assets/img/divider.svg'
import {ReactComponent as ButtonFooterSVG} from './../../assets/img/button-footer.svg'
import { Link, useNavigate } from 'react-router-dom';
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
            <div class="auth-buttons">    
          <button className="login-button" onClick={handleLoginClick}>Log in</button>
          <button className="join-button" onClick={handleJoinusClick}>Join us</button>
            </div>
        </header>
    
       

        <div class="footer">
        <footer class="footer">
            <div class="footer-section1-links1">
                <h15>Tools</h15>
                <ul class="footer-links-list">
                    <li><a href="#workflow" class="footer-link" id="workflow">Workflow</a></li>
                    <li><a href="#teamline" class="footer-link" id="teamline">Teamline</a></li>
                    <li><a href="#pain-points" class="footer-link" id="pain-points">Pain points</a></li>
                </ul>
            </div>

            <div class="footer-section2-links2">
                <h16>Pricing</h16>
                <ul class="footer-links-list">
                    <li><a href="#monthl-plans" class="footer-link" id="monthl-plans">Monthly plans</a></li>
                    <li><a href="#resources" class="footer-link" id="resources">Resources</a></li>
                </ul>
            </div>

            <div class="footer-section3-links3">
                <h17>Contact</h17>
                <ul class="footer-links-list">
                    <li><a href="#facebook" class="footer-link" id="facebook">Facebook</a></li>
                    <li><a href="#instagram" class="footer-link" id="instagram">Instagram</a></li>
                    <li><a href="#tweeter" class="footer-link" id="tweeter">Tweeter</a></li>
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