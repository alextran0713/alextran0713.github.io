import { ImageBackground } from "../components/background-img";
import styles from "./404.module.scss";

const UnavailablePage = () => {
  return (
    <div className={styles?.["container"]}>
      <ImageBackground imgUrl={require("../img/under-con.webp")} />
    </div>
  );
};

export default UnavailablePage;
