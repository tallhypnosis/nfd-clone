import React from 'react';

const YourSvgComponent = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      width="40"
      height="40"
    >
      {/* Assuming you have the gradient definition somewhere */}
      {/* <defs>
        <linearGradient id="Logo_svg__a" ...>
          ...
        </linearGradient>
      </defs> */}
      
      <path
        d="m17.928 25.449-6.723 6.582L22.41 42.78 34.51 30.934l-1.793-17.551h-14.79v12.066Z"
        fill="url(#Logo_svg__a)"
      />
    </svg>
  );
};

export default YourSvgComponent;
