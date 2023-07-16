import BodyContent from "../components/body";
import Footer from "../components/footer";
import NavigationBar from "../components/navbar";
import Popup from "../components/popup";
import Resume from "../components/resume";
import { WebsiteInProgressAlert } from "../data";
import styles from "./main.module.scss";
import { useState } from "react";

const MainPage = () => {
  const [displayResume, setDisplayResume] = useState(false);

  const [alertDisplay, setAlertDisplay] = useState(true);

  return (
    <div className={styles?.["container"]}>
      {alertDisplay && (
        <Popup
          title={WebsiteInProgressAlert?.title}
          message={WebsiteInProgressAlert?.message}
          closeButton={WebsiteInProgressAlert?.closeButton}
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
      <Footer />
    </div>
  );
};

export default MainPage;
