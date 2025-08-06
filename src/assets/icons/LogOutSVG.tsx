interface LogOutSVGProps {
  iconColor?: string;
}

const LogOutSVG: React.FC<LogOutSVGProps> = ({ iconColor = "#0F0F0F" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
    <path
      fill={iconColor}
      fillRule="evenodd"
      d="M19 23h-8a1 1 0 1 1 0-2h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-8a1 1 0 1 1 0-2h8a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3"
      clipRule="evenodd"
    ></path>
    <path
      fill={iconColor}
      fillRule="evenodd"
      d="M2.489 13.31a2 2 0 0 1 0-2.62l4.176-4.82c1.213-1.398 3.512-.54 3.512 1.31V9h6a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-6v1.82c0 1.85-2.3 2.708-3.512 1.31zm2.079-1.965a1 1 0 0 0 0 1.31l3.609 4.164V14.5a1.5 1.5 0 0 1 1.5-1.5h6.5v-2h-6.5a1.5 1.5 0 0 1-1.5-1.5V7.18z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default LogOutSVG;
