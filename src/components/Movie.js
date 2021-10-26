import React from "react";
import "./Movie.css";

function Movie({ movieDetails }) {
  return (
    <div className="movie__container">
      <h5 className="movie__name">{movieDetails.original_title}</h5>
    </div>
  );
}

export default Movie;
