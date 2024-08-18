import './payment.css';
import Header from './../modules/header/header'
import headerStyles from '../modules/header/header.css';
import Footer from './../modules/footer/footer'
import footerStyles from '../modules/footer/footer.css';
import { ReactComponent as DividerSVG } from '../assets/img/divider.svg';

function Payment() {
    return (
     
        
        <>
     
            <Header />
            <div className={headerStyles.sidebar}>
            </div>
            <DividerSVG className="svg-divider"/>
            
            <div className="pay-checkout-container">
                <form id="payment-form">
                    <h2>Confirm & Pay</h2>
                    <div className="form-group">
                        <label for="card-number">Card Number</label>
                        <input type="text" id="card-number" required/>
                    </div>
                    <div className="form-group">
                        <label for="expiry-date">Expiry Date</label>
                        <input type="text" id="expiry-date" placeholder="MM/YY" required/>
                    </div>
                    <div className="form-group">
                        <label for="cvv">CVV</label>
                        <input type="text" id="cvv" required/>
                    </div>
                    <div className="form-group">
                        <label for="cardholder-name">Cardholder Name</label>
                        <input type="text" id="cardholder-name" required/>
                    </div>
                    <button type="submit" class="submit">Confirm & Pay</button>
                   
                </form>
            </div>
            <Footer />
<div className={footerStyles.footer}>
            </div>
        
            </>
        
        
    )
}   

export default Payment;