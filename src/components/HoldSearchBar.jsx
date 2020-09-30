// Dependencies
import React, { useState } from "react";
import styles from "./HoldSearchBar.module.scss";

const HoldSearchBar = ({ holdData, setHoldData }) => {
  const [searchFilteredHolds, setSearchFilteredHolds] = useState(holdData);
  const [filters, setFilters] = useState({
    name: "",
    size: "",
    type: "",
    color: "",
  });

  // Logic for filtering

  const handleChanges = (event) => {
    event.preventDefault();
    setFilters({ ...filters, [event.target.name]: event.target.value });
    console.log(filters);

    // reset holds to unfiltered
    setHoldData();

    const filteredHolds = holdData.filter((hold) => {
      return hold.name === filters.name;
    });

    setHoldData(filteredHolds);
  };

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
