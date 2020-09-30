// Dependencies
import React, { useState } from "react";
import styles from "./HoldSearchBar.module.scss";

const HoldSearchBar = ({ setHoldData }) => {
  const [filter, setFilter] = useState({
    name: "",
    size: "",
    type: "",
    color: "",
  });

  const handleChanges = (event) => {
    event.preventDefault();
    setFilter({ ...filter, [event.target.name]: event.target.value });
    console.log(filter);
  };

  return (
    <div className={styles.searchBarContainer}>
      <form action="">
        <p>Filter by Name:</p>
        <input
          type="text"
          name="name"
          onChange={handleChanges}
          value={filter.name}
        />
        <p>Filter by Size:</p>
        <input
          type="text"
          name="size"
          onChange={handleChanges}
          value={filter.size}
        />
        <p>Filter by Type:</p>
        <input
          type="text"
          name="type"
          onChange={handleChanges}
          value={filter.type}
        />
        <p>Filter by Color:</p>
        <input
          type="text"
          name="color"
          onChange={handleChanges}
          value={filter.color}
        />
      </form>
    </div>
  );
};

export default HoldSearchBar;
