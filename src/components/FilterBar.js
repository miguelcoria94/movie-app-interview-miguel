import React from "react";
import "./FilterBar.css";

function FilterBar() {
  return (
    <div className="search__container">
      <div className="search__logo">
        <span className="search__brand">
          Movelist<span>.</span>{" "}
        </span>
      </div>
      <div className="search__filter">
        <span className="search__filter-label">Filter by:</span>
        <input type="radio" />
      </div>
    </div>
  );
}

export default FilterBar;
