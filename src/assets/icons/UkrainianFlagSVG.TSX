import * as React from "react";

const UkrainianFlagSVG: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 43 26" height="70">
    <path
      fill="#005BBB"
      fillRule="evenodd"
      d="M1 13h40V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#FFD500"
      fillRule="evenodd"
      d="M1 23a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V13H1z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#626C91"
      fillOpacity="0.5"
      fillRule="evenodd"
      d="M3 0h36a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default UkrainianFlagSVG;
