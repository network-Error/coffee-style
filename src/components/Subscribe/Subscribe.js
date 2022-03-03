import React from 'react';
import '../style.scss';

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className='subscribe__background'>
                <div className='subscribe__background__text'>
                    <div className='text-header'>
                        <span></span>
                        <p>Sign up and get free coffee bags</p>
                        <span></span>
                    </div>
                    <h2>Coffee Updates</h2>
                    <div className='subscribe__form'>
                        <input type={'email'} placeholder={'customer@coffeestyle.io'} />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;