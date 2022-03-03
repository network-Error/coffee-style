import React from 'react';
import CardShop from './card';
import pinkPremium from '../../assets/mugs1.png';
import goldenMugs from '../../assets/mugs2.png';
import product1 from '../../assets/product1.jpg';
import product2 from '../../assets/product2.jpg';
import product3 from '../../assets/product3.jpg';
import product4 from '../../assets/product4.jpg';
import product5 from '../../assets/product5.jpg';
import product6 from '../../assets/product6.jpg';
import product7 from '../../assets/product7.jpg';
import product8 from '../../assets/product8.jpg';
import product9 from '../../assets/product9.jpg';
import offer1 from '../../assets/offer1.jpg';
import offer2 from '../../assets/offer2.jpg';
import offer3 from '../../assets/offer3.jpg';
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

            <div className='catalog__products'>
                <div className='catalog__products__header'>
                    <span></span>
                    <p>More Products</p>
                    <span></span>
                </div>

                <div className='catalog__products__items'>
                    <CardShop className={'cardShop__price cardShop__innv'} img={product1} alt={'product'} text={'Red Love Cap'} prices={'$25.00'} price={'$37.00 USD'} />
                    <CardShop className={'cardShop__price cardShop__innv'} img={product2} alt={'product'} text={'Black Tea Cup'} prices={'$15.00'} price={'$29.00 USD'} />
                    <CardShop img={product3} alt={'product'} text={'B&W Essentials Mug'} price={'$19.00 USD'} />
                    <CardShop img={product4} alt={'product'} text={'Winter Style Mug'} price={'$25.00 USD'} />
                    <CardShop img={product5} alt={'product'} text={'Ceramic Tea'} price={'$46.00 USD'} />
                    <CardShop img={product6} alt={'product'} text={'No Handle Bar Cup'} price={'$34.00 USD'} />
                    <CardShop img={product7} alt={'product'} text={'Espresso Cup by Mugs.co'} price={'$25.00 USD'} />
                    <CardShop img={product8} alt={'product'} text={'Pink Premium Ceramic'} price={'$99.00 USD'} />
                    <CardShop img={product9} alt={'product'} text={'Summer Designer Cup'} price={'$29.00 USD'} />
                </div>
            </div>

            <div className='catalog__magazine'>
                <div className='catalog__magazine__header'>
                    <span></span>
                    <p>Buy 2 mugs and get a coffee magazine free</p>
                    <span></span>
                </div>

                <div className='catalog__magazine__items'>
                    <div className='catalog__magazine__items__img'>
                        <div>
                            <img src={offer1} alt='Offer' />
                        </div>
                        <div className='img-wrapper'>   
                            <img src={offer2} alt='Offer' />
                            <img src={offer3} alt='Offer' />
                        </div>
                    </div>
                    <div className='catalog__magazine__items__text'>
                        <span>Premium Offer</span>
                        <h3>Get our Coffee Magazine</h3>
                        <p>The most versatile furniture system ever created. Designed to fit your life.</p>
                        <button>Start Shopping</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalog;