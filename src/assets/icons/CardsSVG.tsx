interface AddSVGProps {
  iconColor?: string;
  size?: number;
}

const SvgIcon: React.FC<AddSVGProps> = ({ iconColor, size = 26 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke={iconColor}
      strokeLinecap="round"
      strokeWidth="2"
      d="M2 16h14a2 2 0 0 0 2-2V4H4a2 2 0 0 0-2 2v5"
    ></path>
    <path
      stroke={iconColor}
      strokeLinecap="round"
      strokeWidth="2"
      d="M6 17v3h14a2 2 0 0 0 2-2V8h-2.823"
    ></path>
  </svg>
);

export default SvgIcon;
