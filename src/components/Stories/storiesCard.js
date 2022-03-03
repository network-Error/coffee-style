import React from 'react';
import '../style.scss';

const StoriesCard = (props) => {
    return (
        <div className='storiesCard'>
            <img src={props.src} alt={props.alt} />
            <p className='storiesCard__head-text'>{props.textHead}</p>
            <p className='storiesCard__body-text'>{props.text}</p>
            <span>{props.date}</span>
        </div>
    )
}

export default StoriesCard;