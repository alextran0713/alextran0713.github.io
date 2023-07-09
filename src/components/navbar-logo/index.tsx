import styles from "./index.module.scss";

export interface NavbarLogoProps {
  imgSrc: string;
}

const NavbarLogo = ({ imgSrc = "" }: NavbarLogoProps) => {
  return (
    <div className={styles?.["navbar-logo"]}>
      <img src={imgSrc} />
    </div>
  );
};

export default NavbarLogo;
