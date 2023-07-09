import { Container } from "react-bootstrap";
import styles from "./index.module.scss";
import Intro from "../introduction";

const BodyContent = () => {
  return (
    <div className={styles?.["container"]}>
      <Container>
        <div>
          <Intro />
        </div>
      </Container>
    </div>
  );
};

export default BodyContent;
