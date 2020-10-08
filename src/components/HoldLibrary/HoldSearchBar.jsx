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

  // Generate type and color arrays for drop down options
  const holdTypeOptions = holdData.map((hold) => {
    return hold.type;
  });
  const holdColorOptions = holdData.map((hold) => {
    return hold.color;
  });

  // Reload page based on search filters
  useEffect(() => {
    // load in holdData the first time
    if (isFirstLoad === true) {
      setFilteredHolds(holdData);
    }

    // Generates an array of holds that matches ALL of
    // the filter criteria.  Must contain any string
    // of characters entered in name, size, type, and
    // color
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

  const handleChanges = (event) => {
    // Updates the filters as they are changed by inputs
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  // Logic for clearing filters
  const clearFilters = (event) => {
    event.preventDefault();
    setFilters({
      name: "",
      size: "",
      type: "",
      color: "",
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
            name="name"
            placeholder="Hold Name"
            onChange={handleChanges}
            value={filters.name}
          />
        </div>
        <div>
          <select
            className={styles.formChild}
            name="size"
            value={filters.size}
            onChange={handleChanges}
          >
            <option value="">filter by size</option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
          </select>
        </div>
        <div>
          <select
            className={styles.formChild}
            name="type"
            value={filters.type}
            onChange={handleChanges}
          >
            <option value="">filter by type</option>
            {holdTypeOptions &&
              holdTypeOptions.map((type, index) => (
                <option value={type} key={index}>
                  {type}
                </option>
              ))}
          </select>
        </div>
        <div>
          <select
            className={styles.formChild}
            name="color"
            value={filters.color}
            onChange={handleChanges}
          >
            <option value="">filter by color</option>
            {holdColorOptions &&
              holdColorOptions.map((color, index) => (
                <option value={color} key={index}>
                  {color}
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

export default HoldSearchBar;
