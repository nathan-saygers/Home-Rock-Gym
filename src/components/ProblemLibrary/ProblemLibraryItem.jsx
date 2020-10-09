// Dependencies
import React from "react";
import styles from "./ProblemLibraryItem.module.scss";

const ProblemLibraryItem = ({ problemDetails }) => {
  return (
    <div className={styles.ProblemLibraryItemContainer}>
      <p>{problemDetails.problemName}</p>
      <p>{problemDetails.setterId}</p>
      <p>{problemDetails.grade}</p>
      <p>{problemDetails.createdAt}</p>
    </div>
  );
};

export default ProblemLibraryItem;
