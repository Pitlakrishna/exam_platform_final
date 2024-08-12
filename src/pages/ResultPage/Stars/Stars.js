import React from 'react'
import { IoStar } from 'react-icons/io5';
import "./Stars.css"

const Stars = ({ rating }) => {
    const stars = Array.from({ length: rating }, (_, index) => (
        <IoStar key={index} color='gold' />
    ));
    return (
        <div className='starContainer' >
            <h1>{stars}</h1>
        </div>
    )
}

// const Stars = Array.from({ length: 3 }, (_, index) => (
//     <IoStar key={index} color='gold' />
// ));

export default Stars