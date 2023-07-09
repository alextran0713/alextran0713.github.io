import React from "react";
import styles from "./index.module.scss";

interface ImageBackgroundProp {
  imgUrl: string;
}

export const ImageBackground = ({ imgUrl }: ImageBackgroundProp) => {
  return <img className="img-fluid" src={imgUrl} alt="construction" />;
};
