interface CloseButtonSVG {
  color?: string;
}

const CloseButtonSVG: React.FC<CloseButtonSVG> = ({ color = '#008080' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      fill="none"
      className="menu-close-link open-close-mobile-menu"
    >
      <rect
        width="23"
        height="2"
        x="11.414"
        y="12"
        fill={color}
        rx="1"
        transform="rotate(45 11.414 12)"
      ></rect>
      <rect
        width="23"
        height="2"
        x="28"
        y="13.414"
        fill={color}
        rx="1"
        transform="rotate(135 28 13.414)"
      ></rect>
    </svg>
  );
}

  export default CloseButtonSVG;
