// Dependencies
import React, { useState } from "react";
import styles from "./ProblemLibrary.module.scss";

// Components
import ProblemLibraryItem from "./ProblemLibraryItem";
import ProblemSearchBar from "./ProblemSearchBar";

const ProblemLibrary = ({ problems }) => {
  const [filteredproblems, setFilteredproblems] = useState();
  console.log("filteredproblems", filteredproblems);
  return (
    <div className={styles.problemLibraryContainer}>
      <problemSearchBar
        setFilteredproblems={setFilteredproblems}
        filteredproblems={filteredproblems}
        problemData={problems}
      />
      <div className={styles.problemContainer}>
        <div className={styles.problemTableHeader}>
          <p>Name</p>
          <p>Size</p>
          <p>Type</p>
          <p>Color</p>
        </div>
        {filteredproblems &&
          filteredproblems.map((problem, index) => (
            <ProblemLibraryItem problemDetails={problem} key={index} />
          ))}
      </div>
    </div>
  );
};

export default ProblemLibrary;
