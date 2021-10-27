import React from "react";
import "./FilterBar.css";

function FilterBar({
  setMovieListTitle,
  setNoList,
  movieList,
  setMovieList,
  popularMovies,
}) {
  function setSearch(e) {
    e.preventDefault();

    if (e.target.value === "popular") {
      setMovieListTitle("Most Popular");
      movieList.sort((a, b) => {
        return b.popularity - a.popularity;
      });
    }

    if (e.target.value === "rating") {
      setMovieListTitle("Highest Rated");
      movieList.sort((a, b) => {
        return b.vote_average - a.vote_average;
      });
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
        <span className="search__filter-label">Sorted by </span>
        <select onChange={setSearch} className="select">
          <option value="popular">most popular</option>
          <option value="rating">highest rated</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
