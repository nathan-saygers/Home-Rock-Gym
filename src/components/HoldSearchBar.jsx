// Dependencies
import React, { useState, useEffect } from "react";
import styles from "./HoldSearchBar.module.scss";

const HoldSearchBar = ({ holdData, setFilteredHolds }) => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [filters, setFilters] = useState({
    name: "",
    size: "",
    type: "",
    color: "",
  });

  // Reload page based on search filters
  useEffect(() => {
    // load in holdData the first time
    if (isFirstLoad === true) {
      setFilteredHolds(holdData);
    }
    const filteredHolds = holdData.filter((hold) => {
      return (
        hold.name.includes(filters.name) &&
        hold.size.includes(filters.size) &&
        hold.type.includes(filters.type) &&
        hold.color.includes(filters.color)
      );
    });
    setFilteredHolds(filteredHolds);
    setIsFirstLoad(false);
  }, [filters]);

  // Logic for filtering
  const handleChanges = (event) => {
    console.log("event stuff", event.target.name, event.target.value);
    setFilters({ ...filters, [event.target.name]: event.target.value });
    console.log("das filter", filters);
  };

  console.log("outside handleChanges", filters);

  return (
    <div className={styles.searchBarContainer}>
      <form action="">
        <p>Filter by Name:</p>
        <input
          type="text"
          name="name"
          onChange={handleChanges}
          value={filters.name}
        />
        <p>Filter by Size:</p>
        <input
          type="text"
          name="size"
          onChange={handleChanges}
          value={filters.size}
        />
        <p>Filter by Type:</p>
        <input
          type="text"
          name="type"
          onChange={handleChanges}
          value={filters.type}
        />
        <p>Filter by Color:</p>
        <input
          type="text"
          name="color"
          onChange={handleChanges}
          value={filters.color}
        />
      </form>
    </div>
  );
};

export default HoldSearchBar;
