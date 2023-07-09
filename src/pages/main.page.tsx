import NavigationBar from "../components/navbar";
import styles from "./main.module.scss";

const MainPage = () => {
  return (
    <div className={styles?.["container"]}>
      <NavigationBar />
    </div>
  );
};

export default MainPage;
