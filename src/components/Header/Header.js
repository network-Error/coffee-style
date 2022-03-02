import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import basket from '../../assets/basket.png';
import basketCount from '../../assets/basketCount.svg';
import '../style.scss';

const Header = () => {
    return (
        <nav className='nav container'>
            <div className='logo'>
                <img src={logo} alt='CoffeeStyle' />
            </div>
            <div className='nav__nav-links'>
                <Link to='#'>Home</Link>
                <Link to='#'>Our Products</Link>
                <Link to='#'>Blog</Link>
                <Link to='#'>About</Link>
                <Link to='#'>Contact</Link>
                <Link to='#'>Styleguide</Link>
            </div>
            <div className='nav__nav-cart'>
                <Link to='#'><img src={basket} alt='Basket' />Cart</Link>
                <img src={basketCount} alt='Basket count' />
            </div>
        </nav>
    )
}

export default Header;