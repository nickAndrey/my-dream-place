import { FC } from 'react';

type StarProps = {
  fillPercentage: number;
};

const Star: FC<StarProps> = ({ fillPercentage }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 51 48' width={24}>
      <defs>
        <linearGradient
          id={`starGradient${fillPercentage}`}
          x1='0%'
          y1='0%'
          x2='100%'
          y2='0%'
        >
          <stop offset={`${fillPercentage}%`} stopColor='#F2994A' />
          <stop offset={`${fillPercentage}%`} stopColor='transparent' />
        </linearGradient>
      </defs>
      <polygon
        fill={`url(#starGradient${fillPercentage})`}
        points='25,1 32,18 50,18 36,29 40,46 25,36 10,46 15,29 1,18 19,18'
      />
    </svg>
  );
};

export default Star;
