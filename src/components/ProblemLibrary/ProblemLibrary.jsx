// Dependencies
import React, { useState } from "react";
import styles from "./ProblemLibrary.module.scss";

// Components
import ProblemLibraryItem from "./ProblemLibraryItem";
import ProblemSearchBar from "./ProblemSearchBar";

const ProblemLibrary = ({ problems }) => {
  const [filteredProblems, setFilteredProblems] = useState();
  console.log("problems in ProblemLibary", problems);

  return (
    <div className={styles.problemLibraryContainer}>
      <ProblemSearchBar
        setFilteredProblems={setFilteredProblems}
        problemData={problems}
      />
      <div className={styles.problemContainer}>
        <div className={styles.problemTableHeader}>
          <p>Name</p>
          <p>Setter</p>
          <p>Grade</p>
          <p>Created at</p>
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
