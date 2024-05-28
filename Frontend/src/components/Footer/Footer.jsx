import './Footer.css';
import {assets} from '../../assets/assets.js'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
           <div className="footer-left">
             <div className="footer-left-logo">
                 <img src={assets.chilli}/>
                 <h1>SPICY</h1>
             </div>
             <p>Delve into the delightful world of flavors with Spicy! Explore our menu to find a variety of dishes that bring heat and happiness to your table. Our passion is crafting unforgettable meals that are as exciting as they are satisfying. Join us on a culinary adventure that promises to spice up your life!</p>
             <div className="social-icons">
                <img src={assets.facebook_icon}/>
                <img src={assets.twitter_icon}/>
                <img src={assets.linkedin_icon}/>
             </div>
           </div>
           <div className="footer-center">
             <h2>COMPANY</h2>
             <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
             </ul>
           </div>
           <div className="footer-right">
             <h2>GET IN TOUCH</h2>
             <ul>
                <li>+123-456-7890</li>
                <li>info@spicy.com</li>
             </ul>
           </div>
        </div>
        <hr />
        <p className='footer-copyright'>© 2024 Spicy. All rights reserved.</p>
    </div>
  )
}

export default Footer