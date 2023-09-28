import React from 'react';
import { Link } from 'react-router-dom';

const RoundOne = () => {
    return (
        <Link to='/image-grid' className='round-one-wrapper'>
            <h1 className='round-one-heading'>Round 1</h1>
        </Link>
    )
}

export default RoundOne