import React from 'react';
import background from '/images/background.jpg'

const Homepage = () => {
    return (
       
        <section className='home-wrapper'>
            <div className='home-caption'>
                <h1>Matching Game</h1>
                <input type='text' />
                <button>Start!</button>
            </div>
            <img src={background} alt='photo' className='homepage-img' />
        </section>
       
    )
}

export default Homepage;