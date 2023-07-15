import { useTypewriter } from "react-simple-typewriter";
import styles from "./index.module.scss";
import { aboutMeDescription } from "../../data";

const AboutMe = () => {
  const [typeEffect] = useTypewriter({
    words: ["Software Developer", "Collaborator", "Gamer"],
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
        Currently, I'm a Full-stack developer at{" "}
        <a href="https://www.777part.com/">
          <img
            style={{ width: 50 }}
            src={require("../../img/777-logo-clear-1.png")}
          />
        </a>
      </span>
      <br />
      <span className={styles?.["aboutme-description"]}>
        {aboutMeDescription}
      </span>
    </div>
  );
};

export default AboutMe;
