import './payment.css';
import Header from './../modules/header/header';
import headerStyles from '../modules/header/header.css';
import Footer from './../modules/footer/footer';
import footerStyles from '../modules/footer/footer.css';
import { ReactComponent as DividerSVG } from '../assets/img/divider.svg';
import { useState } from 'react';

function Payment() {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardholderName, setCardholderName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Przykład walidacji prostego numeru karty (tylko długość)
        if (cardNumber.length !== 16) {
            alert("Card number must be 16 digits.");
            return;
        }

        // Tutaj dodaj logikę, aby wysłać dane do backendu
        // Przykład: fetch lub axios
        fetch('/api/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                cardNumber, 
                expiryDate, 
                cvv, 
                cardholderName 
            }),
        })
        .then(response => response.json())
        .then(data => {
            // Obsługa odpowiedzi z backendu
            console.log('Payment Success:', data);
        })
        .catch((error) => {
            console.error('Payment Error:', error);
        });
    };

    return (
        <>
            <Header />
            <div className={headerStyles.sidebar}></div>
            <DividerSVG className="svg-divider" />

            <div className="pay-checkout-container">
                <form id="payment-form" onSubmit={handleSubmit}>
                    <h2>Confirm & Pay</h2>
                    <div className="form-group">
                        <label htmlFor="card-number">Card Number</label>
                        <input 
                            type="text" 
                            id="card-number" 
                            required 
                            value={cardNumber} 
                            onChange={(e) => setCardNumber(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="expiry-date">Expiry Date</label>
                        <input 
                            type="text" 
                            id="expiry-date" 
                            placeholder="MM/YY" 
                            required 
                            value={expiryDate} 
                            onChange={(e) => setExpiryDate(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cvv">CVV</label>
                        <input 
                            type="text" 
                            id="cvv" 
                            required 
                            value={cvv} 
                            onChange={(e) => setCvv(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cardholder-name">Cardholder Name</label>
                        <input 
                            type="text" 
                            id="cardholder-name" 
                            required 
                            value={cardholderName} 
                            onChange={(e) => setCardholderName(e.target.value)} 
                        />
                    </div>
                    <button type="submit" className="submit">Confirm & Pay</button>
                </form>
            </div>
            <Footer />
            <div className={footerStyles.footer}></div>
        </>
    );
}

export default Payment;
