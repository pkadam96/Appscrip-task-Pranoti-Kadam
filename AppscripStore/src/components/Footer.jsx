import '../css/footer.css';
import USImage from '../images/us.png';
import googlePay from '../images/Gpay.png'
import Mastercard from '../images/mastercard.png'
import Paypal from '../images/paypal.png'
import Amex from '../images/amex.png'
import IPay from '../images/ipay.png'

const Footer=()=>{
    return(
        <footer>
           <div className='footer-top'>
                <div>
                    <h2>BE THE FIRST TO KNOW</h2>
                    <p>Sign up for updates from metta muse.</p>
                    <input type="text" placeholder='Enter your e-mail...'/>
                    <button>SUBSCRIBE</button>
                </div>
                <div>
                    <h2>CONTACT US</h2>
                    <p>+44 221 133 5360</p>
                    <p>customercare@mettamuse.com</p>
                    <h2>CURRENCY</h2>
                    <p className='us-currency'><img src={USImage} alt="US flag" />  USD</p>
                    <p className='currency-desc'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                </div>
           </div>
           <div className='footer-bottom'>
                <div>
                    <div>
                        <h2>metta muse</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Stories</li>
                            <li>Artisans</li>
                            <li>Boutiques</li>
                            <li>Contact Us</li>
                            <li>EU Compliances Docs</li>
                        </ul>
                    </div>
                    <div>
                        <h2>QUICK LINKS</h2>
                        <ul>
                            <li>Orders & Shipping</li>
                            <li>Join/Login as a Seller</li>
                            <li>Payment & Pricing</li>
                            <li>Return & Refunds</li>
                            <li>FAQs</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2>FOLLOW US</h2>
                    <i className="fa-brands fa-xl fa-instagram"></i>
                    <i className="fa-brands fa-xl fa-linkedin"></i>

                    <h2 className='payment'>metta muse ACCEPTS</h2>
                    <div className='payment-cards'>
                        <div>
                            <img src={googlePay} alt="google-pay" />
                        </div>
                        <div>
                            <img src={Mastercard} alt="mastercard" />
                        </div>
                        <div>
                            <img src={Paypal} alt="paypal" />
                        </div>
                        <div>
                            <img src={Amex} alt="amex" />
                        </div>
                        <div>
                            <img src={IPay} alt="ipay" />
                        </div>
                    </div>
                </div>
           </div>
           <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </footer>
    )
}
export {Footer};