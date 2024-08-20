import React, { useState } from 'react';
import './log-in.css';
import Header from './../modules/header/header'
import Footer from './../modules/footer/footer'
import { ReactComponent as DividerSVG } from '../assets/img/divider.svg';


function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Tutaj możesz dodać logikę, aby wysłać dane do backendu
        // Przykład: fetch lub axios
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => response.json())
        .then(data => {
            // Obsługa odpowiedzi z backendu
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
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
                            <button type="submit" className="log-login-button">Login</button>
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
