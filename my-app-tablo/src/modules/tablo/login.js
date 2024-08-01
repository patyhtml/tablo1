import React from 'react';
import './login.css';

import {ReactComponent as HamburgerIconSVG} from './../../assets/img/hamburger-icon.svg'
import {ReactComponent as DividerSVG} from './../../assets/img/divider.svg'

export const Login = () => {


    return (
     
<body>
<header class="header">
        <div class="left-section">
            <div class="logo">Tablo</div>
            <nav class="menu">
                <a href="#tools">Tools</a>
                <a href="#pricing">Pricing</a>
            </nav>
            <div class="hamburger-menu" id="hamburger-menu">
            <HamburgerIconSVG className="svg-hamburger-icon"/>
                <nav class="mobile-menu" id="mobile-menu">
                    <a href="#tools">Tools</a>
                    <a href="#pricing">Pricing</a>
                    <button class="login-button">Log in</button>
                    <button class="join-button">Join us</button>
                </nav>
            </div>
        </div>
        <div class="auth-buttons">
            <button class="login-button">Log in</button>
            <button class="join-button">Join us</button>
        </div>
    </header>

    <DividerSVG className="svg-divider"/>
    
<div class="form-container">
        <div class="login-container">
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
                    <button type="submit" class="login-button">Login</button>
                    <button type="button" class="forgot-password">Forgot your password</button>
                </div>
            </form>
          </div>
        </div>
       
   
import React, { useState } from 'react';
import './Login.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Address e-mail</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="button-group">
          <button type="submit" className="login-button">Login</button>
          <button type="button" className="forgot-password">Forgot your password</button>
        </div>
      </form>
    </div>


export default LoginForm;


import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Tu możesz dodać logikę logowania (np. wysyłanie danych do serwera)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Address e-mail</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="button-group">
          <button type="submit" className="login-button">Login</button>
          <button type="button" className="forgot-password">Forgot your password</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;




</body>

);
}

export default Login;