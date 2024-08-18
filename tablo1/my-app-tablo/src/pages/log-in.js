
import './log-in.css';
import Header from './../modules/header/header'
import headerStyles from '../modules/header/header.css';
import Footer from './../modules/footer/footer'
import footerStyles from '../modules/footer/footer.css';
import { ReactComponent as DividerSVG } from '../assets/img/divider.svg';


function LogIn() {
   

    return (

            <div>
                <Header />
            <div className={headerStyles.sidebar}>
            </div>
                <DividerSVG className="svg-divider" />
              
      
      <div class="log-form-container">
        <div class="log-login-container">
            <form id="login-form">
                <div class="form-group">
                  <h1> Login </h1>
                    <label for="email">Address e-mail</label>
                    <input type="email" id="email" required/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" required/>
                </div>
                <div class="button-group">
                    <button type="submit" class="log-login-button">Login</button>
                    <button type="button" class="forgot-password">Forgot your password</button>
                </div>
            </form>
          </div>
        </div>
         <Footer />
<div className={footerStyles.footer}>
            </div>
  
            </div>
           
            );
          };
          
          export default LogIn;