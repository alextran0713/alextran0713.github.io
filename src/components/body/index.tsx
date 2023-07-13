import { Container } from "react-bootstrap";
import styles from "./index.module.scss";
import Intro from "../introduction";
import ExperienceSection from "../experiences";

const BodyContent = () => {
  return (
    <div className={styles?.["container"]}>
      <Container>
        <Intro />
        <ExperienceSection />
      </Container>
    </div>
  );
};

export default BodyContent;
