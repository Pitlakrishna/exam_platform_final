import React from 'react';
import { IoStar } from 'react-icons/io5';

const StarRatingsList = () => {
    // Function to render stars based on the rating
    const renderStars = (rating) => {
        return (
            <div key={rating}>
                <h4 className='' >
                    {Array.from({ length: rating }, (_, index) => (
                        <IoStar className='pe-2 fs-2' key={index} color='gold' />
                    ))}
                </h4>
            </div>
        );
    };

    return (
        <div>
            {[5, 4, 3, 2, 1].map((rating) => renderStars(rating))}
        </div>
    );
};

const App = () => {
    return (
        <div>
            <StarRatingsList />
        </div>
    );
};

export default App;