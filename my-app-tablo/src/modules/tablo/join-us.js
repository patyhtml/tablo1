import React from 'react';
import './join-us.css';

import {ReactComponent as HamburgerIconSVG} from './../../assets/img/hamburger-icon.svg'
import {ReactComponent as DividerSVG} from './../../assets/img/divider.svg'

export const JoinUs = () => {


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


    <div class="container">
      <div class="form-container">
      
        <form id="join-form">
            <div class="form-group">
              <h1> Sign Up </h1>
                <label for="name">Name</label>
                <input type="text" id="name" required/>
            </div>
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" required/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" required/>
            </div>
            <div class="form-group">
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" required/>
            </div>
           
            <div class="form-group horizontal">
              <input type="checkbox" id="subscribe"/>
              <label for="subscribe">Subscribe to GreenSock Insider: tips for getting started, access to special tools, update notifications and more.</label>
          </div>
          <div class="form-group horizontal">
              <input type="checkbox" id="agree" required/>
              <label for="agree">I agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a> REQUIRED</label>
          </div>
            <button type="submit" class="create-account-button">Create my Account</button>
        </form>
      
    </div>
  </div>

  import React, { useState } from 'react';

const JoinForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [subscribe, setSubscribe] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Walidacja hasła
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Można tu dodać dalszą logikę, np. wysłanie danych do serwera
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Subscribe:', subscribe);
    console.log('Agree:', agree);

    alert('Account created successfully!');
  };

  return (
    <form id="join-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        id="name" 
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        type="email" 
        id="email" 
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type="password" 
        id="password" 
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input 
        type="password" 
        id="confirm-password" 
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <label>
        <input 
          type="checkbox" 
          id="subscribe"
          checked={subscribe}
          onChange={(e) => setSubscribe(e.target.checked)}
        />
        Subscribe to newsletter
      </label>
      <label>
        <input 
          type="checkbox" 
          id="agree"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        Agree to terms and conditions
      </label>
      <button type="submit">Join</button>
    </form>
  );


















</body>

);
}

export default JoinUs;