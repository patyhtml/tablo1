import './join-us.css';
import Header from './../modules/header/header'
import headerStyles from '../modules/header/header.css';
import Footer from './../modules/footer/footer'
import footerStyles from '../modules/footer/footer.css';
import { ReactComponent as DividerSVG } from '../assets/img/divider.svg';

function JoinUs() {
    return (
     
   
      <body>
        <Header />
        <div className={headerStyles.sidebar}>
            </div>
        <DividerSVG className="svg-divider"/>
      
        <div className="joi-container">
  <div className="joi-form-container">
    <form id="join-form">
      <div className="form-group">
     <h1>Sign Up</h1>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required />
      </div>
      <div className="form-group">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" required />
      </div>
      <div className="joi-form-group horizontal">
        <input type="checkbox" id="subscribe" />
        <label htmlFor="subscribe">Subscribe to GreenSock Insider: tips for getting started, access to special tools, update notifications and more.</label>
      </div>
      <div className="joi-form-group horizontal">
        <input type="checkbox" id="agree" required />
        <label htmlFor="agree">
         I agree to the <button type="button" className="link-button">Terms of Use</button> 
        and 
        <button type="button" className="link-button">Privacy Policy</button> 
        REQUIRED
         </label>
      </div> 
      <div className="space">
      <button type="submit" className="create-account-button">Create my Account</button>
      </div>
    </form>
  </div>
</div>
<Footer />
<div className={footerStyles.footer}>
            </div>
</body>



        
    )
}   

export default JoinUs;