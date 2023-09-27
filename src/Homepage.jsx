import React from 'react';
import imagePlaceholder from '/images/wow.jpg'

const Homepage = () => {
    return (
       
        <section className='home-wrapper'>
            <div className='home-caption'>
                <h1>Matching Game</h1>
                <div className='grey-box'></div>
                <button>Start!</button>
            </div>
                <img src={imagePlaceholder} alt='photo' className='homepage-img' />

            
        </section>
       
    )
}

export default Homepage;