import React from "react";
import "./FilterBar.css";

function FilterBar({ setMovieListTitle, setNoList, movieList, setMovieList }) {
  function setSearch(e) {
    e.preventDefault();
    setMovieListTitle("Sorted by average vote");
    setMovieList(
      movieList.sort((a, b) => {
        return b.vote_average - a.vote_average;
      })
    );

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
        <span className="search__filter-label">Sort by year</span>{" "}
        <select onChange={setSearch}>
          <option value="">Default</option>
          <option value="rating">average rating</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
