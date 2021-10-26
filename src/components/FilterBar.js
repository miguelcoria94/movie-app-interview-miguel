import React from "react";
import "./FilterBar.css";

function FilterBar() {
  return (
    <div className="search__container">
      <div className="search__logo">
        Movelist<span>.</span>{" "}
      </div>
      <div className="search__filter">
        <h3>Filter by:</h3>
        <input type="radio" />
      </div>
    </div>
  );
}

export default FilterBar;
