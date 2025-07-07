import React from "react";

const HexveilLogo = ({ size = 80 }: { size?: number }) => (
  <svg
    width={size}
    height={size * 0.87}
    viewBox="0 0 100 87"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block" }}
  >
    <defs>
      <linearGradient id="hexGradient" x1="0" y1="0" x2="100" y2="87" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7F5AF0" />
        <stop offset="1" stopColor="#2CBDF7" />
      </linearGradient>
      <filter id="shadow" x="-10" y="-10" width="120" height="107" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.18" />
      </filter>
    </defs>
    <polygon
      points="50,5 95,27.5 95,59.5 50,82 5,59.5 5,27.5"
      fill="url(#hexGradient)"
      filter="url(#shadow)"
      stroke="#fff"
      strokeWidth="2"
      rx="8"
    />
    <polygon
      points="50,5 95,27.5 95,59.5 50,82 5,59.5 5,27.5"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      opacity="0.15"
    />
    <polygon
      points="50,5 95,27.5 95,59.5 50,82 5,59.5 5,27.5"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      opacity="0.08"
      transform="scale(0.93) translate(3.5, 3.5)"
    />
    <polygon
      points="50,5 95,27.5 95,59.5 50,82 5,59.5 5,27.5"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      opacity="0.05"
      transform="scale(0.87) translate(6.5, 6.5)"
    />
    <polygon
      points="50,5 95,27.5 95,59.5 50,82 5,59.5 5,27.5"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      opacity="0.03"
      transform="scale(0.81) translate(9.5, 9.5)"
    />
    <polygon
      points="50,5 95,27.5 95,59.5 50,82 5,59.5 5,27.5"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      opacity="0.02"
      transform="scale(0.75) translate(12.5, 12.5)"
    />
    <polygon
      points="50,5 95,27.5 95,59.5 50,82 5,59.5 5,27.5"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      opacity="0.01"
      transform="scale(0.69) translate(15.5, 15.5)"
    />
    <polygon
      points="50,5 95,27.5 95,59.5 50,82 5,59.5 5,27.5"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      opacity="0.01"
      transform="scale(0.63) translate(18.5, 18.5)"
    />
    <polygon
      points="50,5 95,27.5 95,59.5 50,82 5,59.5 5,27.5"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      opacity="0.01"
      transform="scale(0.57) translate(21.5, 21.5)"
    />
    <polygon
      points="50,5 95,27.5 95,59.5 50,82 5,59.5 5,27.5"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      opacity="0.01"
      transform="scale(0.51) translate(24.5, 24.5)"
    />
    <polygon
      points="50,5 95,27.5 95,59.5 50,82 5,59.5 5,27.5"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      opacity="0.01"
      transform="scale(0.45) translate(27.5, 27.5)"
    />
    <polygon
      points="50,5 95,27.5 95,59.5 50,82 5,59.5 5,27.5"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      opacity="0.01"
      transform="scale(0.39) translate(30.5, 30.5)"
    />
    <polygon
      points="50,5 95,27.5 95,59.5 50,82 5,59.5 5,27.5"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      opacity="0.01"
      transform="scale(0.33) translate(33.5, 33.5)"
    />
    <polygon
      points="50,5 95,27.5 95,59.5 50,82 5,59.5 5,27.5"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      opacity="0.01"
      transform="scale(0.27) translate(36.5, 36.5)"
    />
    <polygon
      points="50,5 95,27.5 95,59.5 50,82 5,59.5 5,27.5"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      opacity="0.01"
      transform="scale(0.21) translate(39.5, 39.5)"
    />
    <polygon
      points="50,5 95,27.5 95,59.5 50,82 5,59.5 5,27.5"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      opacity="0.01"
      transform="scale(0.15) translate(42.5, 42.5)"
    />
    <polygon
      points="50,5 95,27.5 95,59.5 50,82 5,59.5 5,27.5"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      opacity="0.01"
      transform="scale(0.09) translate(45.5, 45.5)"
    />
    <polygon
      points="50,5 95,27.5 95,59.5 50,82 5,59.5 5,27.5"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      opacity="0.01"
      transform="scale(0.03) translate(48.5, 48.5)"
    />
    <polygon
      points="50,5 95,27.5 95,59.5 50,82 5,59.5 5,27.5"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      opacity="0.01"
      transform="scale(0.01) translate(49.5, 49.5)"
    />
    <polygon
      points="60,43.5 44,53 44,34"
      fill="#fff"
      style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.10))" }}
    />
  </svg>
);

export default HexveilLogo; 