// Dependencies
import React from "react";
import styles from "./WallGridItem.module.scss";

const WallGridItem = ({ coord }) => {
  return <div className={styles.gridItem}>{coord.name}</div>;
};

export default WallGridItem;
