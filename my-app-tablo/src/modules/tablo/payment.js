import React from 'react';
import './payment.css';

import {ReactComponent as HamburgerIconSVG} from './../../assets/img/hamburger-icon.svg'
import {ReactComponent as DividerSVG} from './../../assets/img/divider.svg'

export const Payment = () => {


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
    <div class="checkout-container">
        <form id="payment-form">
            <h2>Confirm & Pay</h2>
            <div class="form-group">
                <label for="card-number">Card Number</label>
                <input type="text" id="card-number" required/>
            </div>
            <div class="form-group">
                <label for="expiry-date">Expiry Date</label>
                <input type="text" id="expiry-date" placeholder="MM/YY" required/>
            </div>
            <div class="form-group">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" required/>
            </div>
            <div class="form-group">
                <label for="cardholder-name">Cardholder Name</label>
                <input type="text" id="cardholder-name" required/>
            </div>
            <button type="submit" class="submit">Confirm & Pay</button>
        </form>
    </div>









        </body>


        );
}

export default Payment;