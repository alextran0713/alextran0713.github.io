import React from "react";
import { ImageBackground } from "../components/ImageBackground";
import styles from './404.module.scss';

export const UnavailablePage = () => {
  return (
    <div className={styles?.['container']}>
      <ImageBackground imgUrl={require("../img/under-con.webp")} />
    </div>
  );
};
