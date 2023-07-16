import { Container } from "react-bootstrap";
import styles from "./index.module.scss";
import Intro from "../introduction";
import ExperienceSection from "../experiences";
import TechnicalSkills from "../technical-skill";

const BodyContent = () => {
  return (
    <div className={styles?.["container"]}>
      <Container>
        <Intro />
        <ExperienceSection />
        <TechnicalSkills />
      </Container>
    </div>
  );
};

export default BodyContent;
