import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './log-in.css';
import Header from './../modules/header/header'
import Footer from './../modules/footer/footer'
import { ReactComponent as DividerSVG } from '../assets/img/divider.svg';
import { ApiService } from '../services/apiService'; 
import { userlist } from '../services/apiRouteService';


function LogIn({setToken}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        ApiService.post(userlist, {
            email,
            password
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if (data) {
                // Tutaj możesz obsłużyć sukces, np. zapisać token lub przekierować
                navigate('/board');
            } else {
                throw new Error('Błąd logowania');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert(error);
        });
        
    };
   
    return (
        <div>
            <Header />
           
          
            <DividerSVG className="svg-divider" />
            <div className="log-form-container">
                <div className="log-login-container">
                    <form id="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <h1>Login</h1>
                            <label htmlFor="email">Address e-mail</label>
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
                        <div className="button-group">
                            <button type="submit" className="log-login-button" onClick={handleSubmit}>Login</button>
                            <button type="button" className="forgot-password">Forgot your password</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
           
        </div>
    );
};

export default LogIn;
