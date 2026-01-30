import React from "react";
import "./style.css";

interface BadgeProps {
  width?: string | number;
  height?: string | number;
}

const SolutionsArchitectAssociateBadge: React.FC<BadgeProps> = ({
  width = 400,
  height = 460,
}) => {
  return (
    <div className="aws-badge-wrapper">
      <svg
        width={width}
        height={height}
        viewBox="0 0 400 460"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* FUNDAL */}
          <linearGradient id="awsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1c55e8" />
            <stop offset="100%" stopColor="#0b134f" />
          </linearGradient>

          {/* RING GRADIENT */}
          <linearGradient
            id="ringGradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="400"
            y2="0"
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="20%" stopColor="#cfe0ff" />
            <stop offset="45%" stopColor="#2f6bff" />
            <stop offset="70%" stopColor="#cfe0ff" />
            <stop offset="100%" stopColor="white" />
          </linearGradient>

          {/* GLOW FIN */}
          <filter id="ringGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feColorMatrix
              type="matrix"
              values="
              0 0 0 0 0.35
              0 0 0 0 0.55
              0 0 0 0 1
              0 0 0 1 0"
            />
          </filter>
        </defs>

        {/* SHAPE ORIGINAL */}
        <path
          className="aws-badge-shape"
          d="M200 15 L375 115 L375 350 L200 450 L25 350 L25 115 Z"
          fill="url(#awsGradient)"
          stroke="#5299ff"
          strokeWidth="12"
          strokeLinejoin="round"
        />

        {/* GLOW ROTATIV */}
        <path
          d="M200 15 L375 115 L375 350 L200 450 L25 350 L25 115 Z"
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="12"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeDasharray="80 920"
          filter="url(#ringGlow)"
          opacity="0.6"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-1000"
            dur="4.5s"
            repeatCount="indefinite"
          />
        </path>

        {/* RING SHARP (highlight) */}
        <path
          d="M200 15 L375 115 L375 350 L200 450 L25 350 L25 115 Z"
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="5"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeDasharray="80 920"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-1000"
            dur="4.5s"
            repeatCount="indefinite"
          />
        </path>

        {/* === RESTUL SVG-ULUI TĂU — NEATINS === */}

        <g transform="translate(145, 105)">
          <text x="0" y="0" fontFamily="Verdana, Arial, sans-serif" fontSize="38" fill="white">
            aws
          </text>

          <text
            x="0"
            y="26"
            fontFamily="Verdana, Arial, sans-serif"
            fontSize="24"
            fill="white"
          >
            certified
          </text>
        </g>

        <g transform="translate(228, 79)">
          <path d="M13 0 L26 7.5 L26 22.5 L13 30 L0 22.5 L0 7.5 Z" fill="#ff9900" />
          <path
            d="M7 15 L11 19 L19 11"
            stroke="white"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        <line
          x1="103"
          y1="163"
          x2="297"
          y2="163"
          stroke="white"
          strokeWidth="2"
          opacity="0.9"
        />

        <text
          x="200"
          y="215"
          fontFamily="Verdana, Arial, sans-serif"
          fontWeight="800"
          fontSize="42"
          fill="white"
          textAnchor="middle"
        >
          Solutions
        </text>

        <text
          x="200"
          y="260"
          fontFamily="Verdana, Arial, sans-serif"
          fontWeight="800"
          fontSize="42"
          fill="white"
          textAnchor="middle"
        >
          Architect
        </text>

        <line
          x1="103"
          y1="288"
          x2="297"
          y2="288"
          stroke="white"
          strokeWidth="2"
          opacity="0.9"
        />

        <text
          x="200"
          y="328"
          fontFamily="Verdana, Arial, sans-serif"
          fontWeight="bold"
          fontSize="22"
          fill="white"
          textAnchor="middle"
          letterSpacing="4"
        >
          ASSOCIATE
        </text>
      </svg>
    </div>
  );
};

export default SolutionsArchitectAssociateBadge;
