// Dependencies
import React, { useState, useEffect } from "react";
import styles from "./ProblemSearchBar.module.scss";

const ProblemSearchBar = ({ problemData, setFilteredProblems }) => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [filters, setFilters] = useState({
    problemName: "",
    setterId: "",
    grade: "",
    createdAt: "",
  });

  // Generate setterId dropdown options.
  const unsortedSetterIdOptions = [
    ...new Set(problemData.map((problem) => problem.setterId)),
  ];
  const setterIdOptions = unsortedSetterIdOptions.sort();

  // Reload page based on search filters
  useEffect(() => {
    console.log("problemData in problemsearchbar", problemData);
    // load in problemData the first time
    if (isFirstLoad === true) {
      setFilteredProblems(problemData);
    }

    // Generates an array of problems that matches ALL of
    // the filter criteria.
    const filteredProblems = problemData.filter((problem) => {
      return (
        problem.problemName.includes(filters.problemName) &&
        // problem.setterId === filters.setterId &&
        problem.grade.includes(filters.grade)
      );
    });
    setFilteredProblems(filteredProblems);
    setIsFirstLoad(false);
  }, [filters]);

  const handleChanges = (event) => {
    // Updates the filters as they are changed by inputs
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  // Logic for clearing filters
  const clearFilters = (event) => {
    event.preventDefault();
    setFilters({
      problemName: "",
      setterId: "",
      grade: "",
      createdAt: "",
    });
  };

  // Dropdown options for hold type and hold color are
  // generated dynamically by mapping over the holdData
  // array.  See lines 14-20 (as of Oct 2020)

  return (
    <div className={styles.searchBarContainer}>
      <form className={styles.searchForm}>
        <div>Filters:</div>
        <div>
          <input
            className={styles.formChild}
            type="text"
            name="problemName"
            placeholder="Problem Name"
            onChange={handleChanges}
            value={filters.problemName}
          />
        </div>
        <div>
          <select
            className={styles.formChild}
            name="grade"
            value={filters.grade}
            onChange={handleChanges}
          >
            <option value="">filter by grade</option>
            <option value="VB">VB</option>
            <option value="V0">V0</option>
            <option value="V1">V1</option>
            <option value="V2">V2</option>
            <option value="V3">V3</option>
            <option value="V4">V4</option>
            <option value="V5">V5</option>
            <option value="V6">V6</option>
            <option value="V7">V7</option>
            <option value="V8">V8</option>
            <option value="vHard">vHard</option>
          </select>
        </div>
        <div>
          <select
            className={styles.formChild}
            name="setterId"
            value={filters.setterId}
            onChange={handleChanges}
          >
            <option value="">filter by setterId</option>
            {setterIdOptions &&
              setterIdOptions.map((setterId, index) => (
                <option value={setterId} key={index}>
                  {setterId}
                </option>
              ))}
          </select>
        </div>
        <div>
          <button onClick={clearFilters} className={styles.formChild}>
            Clear Filters
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProblemSearchBar;
