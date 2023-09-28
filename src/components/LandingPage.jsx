import React from 'react'
import background from '/images/background.jpg'

const LandingPage = ({handleStart}) => {
    return (
        <section className='home-wrapper'>
            <div className='home-caption'>
                <h1>Matching Game</h1>
                {/* <input type='text' /> */}
                <h2>A fun and interactive facial expressions memory game aimed at children with autism, ADHD and communication difficulties.</h2>
                <button onClick={handleStart}>Start!</button>
            </div>
            <img src={background} alt='photo' className='homepage-img' />
        </section>
    )
}

export default LandingPage;