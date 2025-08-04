import GoogleSVG from "../../assets/icons/GoogleSVG";
import styles from "./GoogleButton.module.scss";
interface GoogleButtonProps {
  name: string;
  className?: string;
}

const GoogleButton: React.FC<GoogleButtonProps> = ({ name, className }) => {
  return (
    <div className={`${className} ${styles.googleButton}`}>
      <GoogleSVG />
      <div className={styles.name}>{name}</div>
    </div>
  );
};

export default GoogleButton;
