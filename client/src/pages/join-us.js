import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './join-us.css';
import Header from './../modules/header/header';
import headerStyles from '../modules/header/header.css';
import Footer from './../modules/footer/footer';
import footerStyles from '../modules/footer/footer.css';
import { ReactComponent as DividerSVG } from '../assets/img/divider.svg';
import { ApiService } from '../services/apiService';
import { userlist } from '../services/apiRouteService';

function JoinUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [subscribe, setSubscribe] = useState(false);
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    const handleCreateMyAccountClick = (event) => {
        event.preventDefault();
        
        // Sprawdzenie, czy hasła są zgodne
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        
        // Przesyłanie danych do API
        ApiService.post(userlist, {
            name,
            email,
            password,
            subscribe,
            agree
        })
      
        .then(data => {
            console.log('Success:', data);
            // Przekierowanie do strony głównej
            navigate('/board');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert(error);
        });
    };

    return (
      <div>
        <Header />
        <div className={headerStyles.sidebar}></div>
        <DividerSVG className="svg-divider"/>
      
        <div className="joi-container">
            <div className="joi-form-container">
                <form id="join-form" onSubmit={handleCreateMyAccountClick}>
                    <div className="form-group">
                        <h1>Sign Up</h1>
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            required 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            required 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            required 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input 
                            type="password" 
                            id="confirm-password" 
                            required 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                        />
                    </div>
                    <div className="joi-form-group horizontal">
                        <input 
                            type="checkbox" 
                            id="subscribe" 
                            checked={subscribe} 
                            onChange={(e) => setSubscribe(e.target.checked)} 
                        />
                        <label htmlFor="subscribe">Subscribe to GreenSock Insider: tips for getting started, access to special tools, update notifications and more.</label>
                    </div>
                    <div className="joi-form-group horizontal">
                        <input 
                            type="checkbox" 
                            id="agree" 
                            required 
                            checked={agree} 
                            onChange={(e) => setAgree(e.target.checked)} 
                        />
                        <label htmlFor="agree">
                            I agree to the <button type="button" className="link-button">Terms of Use</button> 
                            and 
                            <button type="button" className="link-button">Privacy Policy</button> 
                            REQUIRED
                        </label>
                    </div> 
                    <div className="space">
                    <button className="submit" onClick={handleCreateMyAccountClick}>Create my Account</button>
                        
                    </div>
                </form>
            </div>
        </div>
        <Footer />
        <div className={footerStyles.footer}></div>
      </div>
    );
}   

export default JoinUs;
