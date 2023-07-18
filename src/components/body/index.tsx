import { Container } from "react-bootstrap";
import styles from "./index.module.scss";
import Intro from "../introduction";
import ExperienceSection from "../experiences";
import TechnicalSkills from "../technical-skill";
import Education from "../education";

const BodyContent = () => {
  return (
    <div className={styles?.["container"]}>
      <Container>
        <Intro />
        <Education />
        <ExperienceSection />
        <TechnicalSkills />
      </Container>
    </div>
  );
};

export default BodyContent;
