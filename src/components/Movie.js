import React from "react";
import "./Movie.css";

function Movie({ movieDetails }) {
  return (
    <div className="movie__container">
      <div className="movie__image-container">
        <img src="" alt={movieDetails.original_title} />
      </div>
      <div className="movie__details">
        <span className="movie__details-accent"></span>
        <h5 className="movie__name">{movieDetails.original_title}</h5>
      </div>
    </div>
  );
}

export default Movie;
