import styles from "./index.module.scss";

const AboutMe = () => {
  return (
    <div className={styles?.["container"]}>
      <h1>I'm a Software Developer.</h1>
      <span>
        Currently, I'm currently working at{" "}
        <a href="https://www.777part.com/">
          {" "}
          <img src={require("../../img/777-logo-clear-1.png")} />
        </a>
      </span>
      <br />
      <span className={styles?.["aboutme-description"]}>
        I have accumulated 2+ years of hands-on experience working with React
        and TypeScript. During my time at 777 Partners, I have developed and
        sharpened my skill to create customizable and reusable
        components/library. I have launched and supported an Internet Booking
        Engine for a low-cost airline carrier. I am committed to using my skills
        to make a difference. Whether it's developing applications that promote
        sustainability, or designing software to enhance accessibility, I am
        driven by the desire to contribute to a better world through my coding
        abilities.
      </span>
    </div>
  );
};

export default AboutMe;