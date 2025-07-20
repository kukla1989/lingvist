const BurgerMenuSVG: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="42"
    height="42"
    fill="none"
    className="burger-mobile open-close-mobile-menu"
  >
    <rect width="23" height="2" x="10" y="16" fill="#2c3143" rx="1"></rect>
    <rect width="17" height="2" x="10" y="23" fill="#2c3143" rx="1"></rect>
  </svg>
);

export default BurgerMenuSVG;
