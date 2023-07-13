import styles from "./index.module.scss";
import Profile from "../profile";
import AboutMe from "../about-me";

const Intro = () => {
  return (
    <div className={styles?.["container"]}>
      <Profile />
      <AboutMe />
    </div>
  );
};

export default Intro;
