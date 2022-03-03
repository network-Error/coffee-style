import React from 'react';
import StoriesCard from './storiesCard';
import stories1 from '../../assets/stories1.jpg';
import stories2 from '../../assets/stories2.jpg';
import stories3 from '../../assets/stories3.jpg';
import '../style.scss';

const Stories = () => {
    return (
        <div className='stories'>
            <div className='stories__header'>
                <span></span>
                <p>Behind the mugs, lifestyle stories</p>
                <span></span>
            </div>
            <div className='stories__items'>
                <StoriesCard src={stories1} alt={'Stories'} textHead={`Health Check: why do I get a headache when I haven’t had my coffee?`} text={'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'} date={'October 9, 2018'} />
                <StoriesCard src={stories2} alt={'Stories'} textHead={'How long does a cup of coffee keep you awake?'} text={'It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.'} date={'October 9, 2018'} />
                <StoriesCard src={stories3} alt={'Stories'} textHead={'Recent research suggests that heavy coffee drinkers may reap health benefits.'} text={'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'} date={'October 9, 2018'} />
            </div>
        </div>
    )
}
export default Stories;