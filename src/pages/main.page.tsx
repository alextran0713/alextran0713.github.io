import BodyContent from "../components/body";
import NavigationBar from "../components/navbar";
import Resume from "../components/resume";
import styles from "./main.module.scss";
import { useState } from "react";

const MainPage = () => {
  const [displayResume, setDisplayResume] = useState(false);
  return (
    <div className={styles?.["container"]}>
      <NavigationBar setDisplayResume={setDisplayResume} />
      <BodyContent />
      <Resume
        isShow={displayResume}
        handleIsClose={setDisplayResume}
        isResume={displayResume}
      />
    </div>
  );
};

export default MainPage;
