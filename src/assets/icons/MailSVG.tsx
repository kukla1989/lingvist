import * as React from "react";

const MailSVG: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  height="24px">
    <path
      fillRule="evenodd"
      d="M0 7c0-1.7 1.3-3 3-3h17c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3H3c-1.7 0-3-1.3-3-3zm3-1c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h17c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1z"
      clipRule="evenodd"
    ></path>
    <path
      fillRule="evenodd"
      d="M3.2 8.9c.3-.4 1-.5 1.4-.2l6.9 5.1 6.9-5.1c.4-.3 1.1-.2 1.4.2s.2 1.1-.2 1.4l-8.1 5.9-8.1-5.9c-.4-.3-.5-.9-.2-1.4"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default MailSVG;
