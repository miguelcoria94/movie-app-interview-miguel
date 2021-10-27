import React from "react";
import Movie from "./Movie";
import "./Movies.css";

function Movies({ movieList }) {
  return (
    <>
      <h6>Most Popular</h6>
      <div className="movies__grid">
        {movieList.map((movie) => {
          return <Movie movieDetails={movie} key={movie.id} />;
        })}
      </div>
    </>
  );
}

export default Movies;
