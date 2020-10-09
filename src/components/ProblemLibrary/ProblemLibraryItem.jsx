// Dependencies
import React from "react";
import styles from "./ProblemLibraryItem.module.scss";

const ProblemLibraryItem = ({ problemDetails }) => {
  return (
    <div className={styles.ProblemLibraryItemContainer}>
      <p>{problemDetails.problem_name}</p>
      <p>{problemDetails.setter}</p>
      <p>{problemDetails.grade}</p>
      <p>{problemDetails.created_at}</p>
    </div>
  );
};

export default ProblemLibraryItem;
