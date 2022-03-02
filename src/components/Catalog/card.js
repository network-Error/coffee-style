import React from 'react';
import '../style.scss';

const CardShop = (props) => {
    return (
        <div className='cardShop'>
            <img src={props.img} alt={props.alt}/>
            <p>{props.text}</p>
            <span className='cardShop__actualPrice'>{props.prices}</span>
            <span className={props.className}>{props.price}</span>
        </div>
    )
}

export default CardShop;