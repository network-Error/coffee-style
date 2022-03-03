import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../style.scss';

const Footer = () => {
    return (
        <footer className='footer container'>
            <div className='footer__text'>
                <img src={logo} alt='Logo' />
                <p>Delivering the best coffee life since 1996. From coffee geeks to the real ones.</p>
                <span>CoffeeStyle Inc. © 1996</span>
            </div>
            <div className='footer__menu'>
                <p>Menu</p>
                <Link to='#'>Home</Link>
                <Link to='#'>Our Products</Link>
                <Link to='#'>About</Link>
                <Link to='#'>Contact</Link>
                <Link to='#'>Styleguide</Link>
            </div>
            <div className='footer__follow'>
                <p>Follow Us</p>
                <a href='https://facebook.com' target={'_blanck'}>Facebook</a>
                <a href='https://instagram.com' target={'_blanck'}>Instagram</a>
                <a href='https://pinterest.com' target={'_blanck'}>Pinterest</a>
                <a href='https://twitter.com' target={'_blanck'}>Twitter</a>
            </div>
            <div className='footer__contact'>
                <p className='contactUs'>Contact Us</p>
                <p className='help'>We’re Always Happy to Help</p>
                <p className='email'>us@coffeestyle.io</p>
                <span>Powered by Webflow</span>
            </div>
        </footer>
    )
}

export default Footer;