import { useIsDark } from "../../hooks/useIsDark.ts";

interface AddSVGProps {
  iconColor?: string;
}

const LogoSVG: React.FC<AddSVGProps> = ({ iconColor = "#2c3143" }) => {
  const isDark = useIsDark();
  const color = isDark ? "var(--cNavText)" : iconColor;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" fill="none" viewBox="0 0 27 18">
      <path fill={color} d="M12.66.488v3.039l9.138 5.392-9.139 5.422v3.01L26.89 8.918z"></path>
      <path fill={color} d="M2.561 13.269V2.008L0 .488v17.309l12.66-7.507V7.28z"></path>
    </svg>
  );
};

export default LogoSVG;
