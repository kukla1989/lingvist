import { useIsDark } from "../../hooks/useIsDark.ts";

interface AddSVGProps {
  iconColor?: string;
}

const AddSVG: React.FC<AddSVGProps> = ({ iconColor }) => {
  const isDark = useIsDark();
  const color = isDark ? "var(--mainText)" : iconColor;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="27" fill="none" viewBox="0 0 24 24">
      <path d="M3 12c0-7.411 1.588-9 9-9s9 1.588 9 9-1.588 9-9 9c-7.411 0-9-1.588-9-9"></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12h6M12 9v6"
      ></path>
      <path
        stroke={color}
        strokeWidth="2"
        d="M3 12c0-7.411 1.588-9 9-9s9 1.588 9 9-1.588 9-9 9c-7.411 0-9-1.588-9-9Z"
      ></path>
    </svg>
  );
};

export default AddSVG;
