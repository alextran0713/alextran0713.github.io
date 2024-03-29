import { useTypewriter } from "react-simple-typewriter";
import styles from "./index.module.scss";
import { KeywordDescription, AboutMeDescription } from "../../data";

const AboutMe = () => {
  const [typeEffect] = useTypewriter({
    words: KeywordDescription,
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 70,
  });
  return (
    <div className={styles?.["container"]}>
      <h1>
        I'm a <span className={styles?.["key-description"]}>{typeEffect}</span>
      </h1>
      <span>
        Currently, I'm a full-stack developer at{" "}
        <a href="https://www.777part.com/">
          <img
            style={{ width: 50 }}
            src={require("../../img/777-logo-clear-1.png")}
          />
        </a>
      </span>
      <br />
      <span className={styles?.["aboutme-description"]}>
        {AboutMeDescription}
      </span>
    </div>
  );
};

export default AboutMe;
