import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import RoundOne from './components/RoundOne';


const Homepage = () => {
    const [isStart, setIsStart] = useState(false)

    const handleStart = () => {
        setIsStart(true)
    }

    return (
        <>
            {isStart ? <RoundOne /> : <LandingPage handleStart={handleStart} />}
        </>
    )
}

export default Homepage;