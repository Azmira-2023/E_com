import React from 'react'

const Logo = ({w,h}) => {
  return (
    <div>
        <svg
    width={w} 
    height={h}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="50"
      y="60"
      width="100"
      height="100"
      rx="10"
      ry="10"
      fill="#6A5ACD"
    />
    <rect x="70" y="60" width="60" height="50" fill="white" />
    <line
      x1="70"
      y1="60"
      x2="130"
      y2="60"
      stroke="#6A5ACD"
      strokeWidth="5"
    />
    <line
      x1="85"
      y1="40"
      x2="85"
      y2="60"
      stroke="#6A5ACD"
      strokeWidth="5"
    />
    <line
      x1="115"
      y1="40"
      x2="115"
      y2="60"
      stroke="#6A5ACD"
      strokeWidth="5"
    />
    <circle cx="85" cy="35" r="5" fill="#6A5ACD" />
    <circle cx="115" cy="35" r="5" fill="#6A5ACD" />
    <text
      x="50%"
      y="190"
      textAnchor="middle"
      fill="#6A5ACD"
      fontFamily="Arial, sans-serif"
      fontSize="24"
    >
      shop-here
    </text>
  </svg>
</div>
  )
}

export default Logo