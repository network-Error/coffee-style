import React from 'react';
import sectionImage from '../../assets/sectionImage.jpg';
import '../style.scss';

const Image = () => {
    return (
        <div className='image'>
            <img src={sectionImage} alt='Coffee' />
        </div>
    )
}

export default Image;