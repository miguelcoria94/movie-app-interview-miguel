import React from "react";
import "./FilterBar.css";

function FilterBar({ setMovieListTitle, setNoList, movieList }) {
  function setSearch(e) {
    e.preventDefault();
    setNoList(true);
    setMovieListTitle("Searching...");
    if (!e.target.value) {
      setNoList(false);
      setMovieListTitle("Most Popular");
      console.log(movieList);
    }
  }
  return (
    <div className="search__container">
      <div className="search__logo">
        <span className="search__brand">
          TMDB<span className="search__brand-accent">a movielist app</span>{" "}
        </span>
      </div>
      <div className="search__filter">
        <span className="search__filter-label">Filter by</span>
        <input type="search" onChange={setSearch} />
      </div>
    </div>
  );
}

export default FilterBar;
