import React from 'react';

const BackArrow = ({ color }: { color: string }) => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 93.5 71.8"
    >
      <path
        d="M87.7 30.1H19.8L39.9 9.9c2.3-2.3 2.3-6 0-8.2C38.8.6 37.3 0 35.8 0c-1.6 0-3 .6-4.1 1.7l-30 30.1c-2.3 2.3-2.3 6 0 8.2l30 30.1c1.1 1.1 2.5 1.7 4.1 1.7s3-.6 4.1-1.7c2.3-2.3 2.3-6 0-8.2L19.8 41.7h67.9c3.2 0 5.8-2.6 5.8-5.8 0-3.2-2.6-5.8-5.8-5.8z"
        fill={color}
      />
    </svg>
  </>
);

export default BackArrow;
