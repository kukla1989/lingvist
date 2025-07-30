import * as React from "react";

const SvgIcon: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon"
    viewBox="0 0 24 24"
    style={{ height: "24px" }}
  >
    <path
      fill="#4285F4"
      fillRule="evenodd"
      d="M22.6 12.2c0-.8-.1-1.5-.2-2.2H12v4.3h5.9c-.3 1.4-1 2.5-2.2 3.3v2.8h3.6c2.1-2 3.3-4.8 3.3-8.2"
      clipRule="evenodd"
    ></path>
    <path
      fill="#34A853"
      fillRule="evenodd"
      d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.8c-1 .7-2.2 1-3.7 1-2.9 0-5.3-1.9-6.2-4.5H2.2v2.9C4 20.5 7.7 23 12 23"
      clipRule="evenodd"
    ></path>
    <path
      fill="#FBBC05"
      fillRule="evenodd"
      d="M5.8 14.1q-.3-1.05-.3-2.1t.3-2.1V7.1H2.2C1.4 8.5 1 10.2 1 12s.4 3.5 1.2 4.9z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#EA4335"
      fillRule="evenodd"
      d="M12 5.4c1.6 0 3.1.6 4.2 1.6l3.2-3.2C17.5 2.1 15 1 12 1 7.7 1 4 3.5 2.2 7.1l3.7 2.8c.8-2.6 3.2-4.5 6.1-4.5"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default SvgIcon;
