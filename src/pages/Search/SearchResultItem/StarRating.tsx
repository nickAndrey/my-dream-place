import React from 'react';
import Star from './Star';

const MAX_RATING = 5;
const stars = Array.from({ length: MAX_RATING }, (_, i) => i + 1);

type StarRatingProps = {
  rating: number;
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div>
      {stars.map((starIndex) => (
        <Star
          key={starIndex}
          fillPercentage={
            Math.min(Math.max(rating - starIndex + 1, 0), 1) * 100
          }
        />
      ))}
    </div>
  );
};

export default StarRating;
