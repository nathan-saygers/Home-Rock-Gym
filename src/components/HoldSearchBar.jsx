// Dependencies
import React from "react";
import styles from "./HoldSearchBar.module.scss";

const HoldSearchBar = ({ setHoldData }) => {
  const handleClick = (event) => {
    console.log("the link was clicked");
    setHoldData([
      {
        id: 6,
        size: "large",
        name: "thank godder jug",
        type: "jug",
        colore: "orange",
        photo: "www.thisisaphotolink.com",
      },
    ]);
  };

  return (
    <div className={styles.searchBarContainer} onClick={() => handleClick()}>
      I'm a search bar!
    </div>
  );
};

export default HoldSearchBar;
