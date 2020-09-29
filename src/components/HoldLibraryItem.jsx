// Dependencies
import React from "react";
import styles from "./HoldLibraryItem.module.scss";

const HoldLibraryItem = ({ holdDetails }) => {
  return (
    <div className={styles.HoldLibraryItemContainer}>
      <p>{holdDetails.name}</p>
      <p>{holdDetails.size}</p>
      <p>{holdDetails.type}</p>
      <p>{holdDetails.colore}</p>
    </div>
  );
};

export default HoldLibraryItem;
