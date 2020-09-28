// Dependencies
import React, { useState } from "react";
import styles from "./WallGridInput.module.scss";

const WallGridInput = ({ setWallDimensions }) => {
  const [dimensions, setDimensions] = useState({});
  const [wallName, setWallName] = useState("Default Wall");

  // On change handler
  const handleChanges = (event) => {
    if (event.target.name === "name") {
      setWallName(event.target.value);
    } else {
      setDimensions({ ...dimensions, [event.target.name]: event.target.value });
    }

    console.log(
      "from handleChanges",
      "Dimensions: ",
      dimensions,
      "Wall Name: ",
      wallName
    );
  };

  // On Submit Handler
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    setWallDimensions([
      parseInt(dimensions.height),
      parseInt(dimensions.width),
    ]);
  };

  return (
    <div className={styles.wallInputForm}>
      <p>Update Wall Details:</p>
      <form onSubmit={handleSubmit}>
        <p>Height:</p>
        <input
          type="text"
          name="height"
          onChange={handleChanges}
          value={dimensions.height || "Height"}
        />
        <p>Width:</p>
        <input
          type="text"
          name="width"
          onChange={handleChanges}
          value={dimensions.width || "Width"}
        />
        <p>Wall Name:</p>
        <input
          type="text"
          name="name"
          placeholder="Wall Name"
          onChange={handleChanges}
          value={wallName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WallGridInput;
