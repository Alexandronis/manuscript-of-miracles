import React from 'react';

const EmailIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width={20} height={16} x={2} y={4} rx={2} />
    <path d="M22 7L13.03 12.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default EmailIcon;
