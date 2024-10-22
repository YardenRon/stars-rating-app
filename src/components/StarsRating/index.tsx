import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './styles.scss';

interface StarsRatingProps {
    starsNumber: number;
}

const StarsRating = (props: StarsRatingProps) => {
    const { starsNumber } = props;
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const onStarClick = (index: number) => {
        setRating(index);
    };

    const onStarMouseMove = (index: number) => {
        setHover(index);
    };

    const onStarMouseLeave = () => { 
        setHover(rating);
    };

    return (
        <div className="container">
            {
                [...Array(starsNumber)].map((_, index) => {
                    return <FaStar
                        key={index}
                        className={index <= (hover || rating)? 'active' : 'inactive'}
                        size={40}
                        onClick={() => onStarClick(index + 1)}
                        onMouseMove={() => onStarMouseMove(index + 1)}
                        onMouseLeave={onStarMouseLeave}
                    />;
                })
            }
        </div>
    );
};

export default StarsRating;