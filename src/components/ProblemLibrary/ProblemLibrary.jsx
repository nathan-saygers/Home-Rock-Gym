// Dependencies
import React, { useState } from "react";
import styles from "./ProblemLibrary.module.scss";

// Components
import ProblemLibraryItem from "./ProblemLibraryItem";
// import ProblemSearchBar from "./ProblemSearchBar";

const ProblemLibrary = ({ problems, setProblemData }) => {
  const [filteredProblems, setFilteredProblems] = useState();

  return (
    <div className={styles.problemLibraryContainer}>
      {/* <ProblemSearchBar
        setFilteredproblems={setFilteredproblems}
        filteredproblems={filteredproblems}
        problemData={problems}
      /> */}
      <div className={styles.problemContainer}>
        <div className={styles.problemTableHeader}>
          <p>Name</p>
          <p>Size</p>
          <p>Type</p>
          <p>Color</p>
          <p>another</p>
          <p>thing</p>
          <p>problemTableHeader</p>
        </div>
        {filteredProblems &&
          filteredProblems.map((problem, index) => (
            <ProblemLibraryItem problemDetails={problem} key={index} />
          ))}
      </div>
    </div>
  );
};

export default ProblemLibrary;
