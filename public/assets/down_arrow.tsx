import React from 'react';

const DownArrow = ({ color }: { color: string }) => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 487 295.8"
    >
      <path
        d="M243.5 169.5L89.3 15.3c-20.4-20.4-53.6-20.4-74 0s-20.4 53.6 0 74l191.2 191.2c20.4 20.4 53.6 20.4 74 0L471.7 89.3c20.4-20.4 20.4-53.6 0-74s-53.6-20.4-74 0L243.5 169.5z"
        fill={color}
      />
    </svg>
  </>
);

export default DownArrow;
