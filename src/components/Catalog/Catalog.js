import React from 'react';
import CardShop from './card';
import pinkPremium from '../../assets/mugs1.png';
import goldenMugs from '../../assets/mugs2.png';
import '../style.scss';

const Catalog = (props) => {
    return (
        <div className='catalog container'>
            <div className='catalog__text'>
                <h2>Even the all-powerful Pointing has no control about the blind texts.</h2>
                <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                <button>Read the full Story</button>
            </div>

            <div className='catalog__featured'>
                <div className='catalog__featured__header'>
                    <span></span>
                    <p>Featured Mugs</p>
                    <span></span>
                </div>

                <div className='catalog__featured__items'>
                    <CardShop img={pinkPremium} alt={'pinkPremium'} text={'Pink Premium Ceramic'} price={'$ 99.00 USD'} />
                    <CardShop className={'cardShop__price cardShop__innv'} img={goldenMugs} alt={'goldenMugs'} text={'Golden Designers Mug'} prices={'$50.00'} price={'$ 69.00 USD'} />
                </div>
            </div>
        </div>
    )
}

export default Catalog;