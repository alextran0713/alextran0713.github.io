import BodyContent from "../components/body";
import NavigationBar from "../components/navbar";
import styles from "./main.module.scss";

const MainPage = () => {
  return (
    <div className={styles?.["container"]}>
      <NavigationBar />
      <BodyContent />
    </div>
  );
};

export default MainPage;
