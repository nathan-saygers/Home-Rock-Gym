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
      <form className={styles.searchForm}>
        <div>Filters:</div>
        <div>
          <input
            className={styles.formInput}
            type="text"
            name="name"
            placeholder="Hold Name"
            onChange={handleChanges}
            value={filters.name}
          />
        </div>
        <div>
          <select
            className={styles.formInput}
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
            className={styles.formInput}
            name="type"
            value={filters.type}
            onChange={handleChanges}
          >
            <option value="">filter by type</option>
            {holdTypeOptions &&
              holdTypeOptions.map((type) => (
                <option value={type}>{type}</option>
              ))}
          </select>
        </div>
        <div>
          <select
            className={styles.formInput}
            name="color"
            value={filters.color}
            onChange={handleChanges}
          >
            <option value="">filter by color</option>
            {holdColorOptions &&
              holdColorOptions.map((color) => (
                <option value={color}>{color}</option>
              ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default HoldSearchBar;
