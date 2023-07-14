import BodyContent from "../components/body";
import NavigationBar from "../components/navbar";
import Popup from "../components/popup";
import Resume from "../components/resume";
import { websiteInProgressAlert } from "../data";
import styles from "./main.module.scss";
import { useState } from "react";

const MainPage = () => {
  const [displayResume, setDisplayResume] = useState(false);

  const [alertDisplay, setAlertDisplay] = useState(true);

  return (
    <div className={styles?.["container"]}>
      {alertDisplay && (
        <Popup
          title={websiteInProgressAlert?.title}
          message={websiteInProgressAlert?.message}
          closeButton={websiteInProgressAlert?.closeButton}
          isShow={alertDisplay}
          setIsShow={setAlertDisplay}
        />
      )}
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
