// Dependencies
import React from "react";
import styles from "./ProblemLibraryItem.module.scss";

const ProblemLibraryItem = ({ holdDetails }) => {
  return (
    <div className={styles.ProblemLibraryItemContainer}>
      <p>{holdDetails.name}</p>
      <p>{holdDetails.size}</p>
      <p>{holdDetails.type}</p>
      <p>{holdDetails.color}</p>
    </div>
  );
};

export default ProblemLibraryItem;
