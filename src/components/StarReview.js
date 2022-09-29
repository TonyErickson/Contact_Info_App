import React, { useState } from  'react';
import { FaStar } from 'react-icons/fa';
import "../App.css"

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);


    return (
    <td>
        {[...Array(5)].map ((star, i) => {
            const ratingValue = i + 1;

            return (
                
                <label className='container-flex' text-align='center'>
                    <input type="radio" name="rating" value={ratingValue}
                    onClick={() => setRating(ratingValue)}/>
                   <FaStar className="star" color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'} size={30} 
                   onMouseEnter={() => setHover(ratingValue)}
                   onMouseLeave={() => setHover(null)}/>
                </label>
            );
        })}
    </td>
    );
}

export default StarRating;