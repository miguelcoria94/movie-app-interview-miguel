import React from "react";
import "./Movie.css";

function Movie({ movieDetails }) {
  return (
    <div className="movie__container">
      <div className="movie__image-container">
        <img src="" alt={movieDetails.original_title} />
      </div>
      <div className="movie__details">
        <div className="movie__details-accent"></div>
        <h5 className="movie__name">{movieDetails.original_title}</h5>
        <div>
          <span className="movie__rating">
            <span className="fas fa-star movie__rating-icon"></span>{" "}
            {movieDetails.vote_average}
          </span>
          <span className="movie__vote-count">
            <span className="fas fa-user movie__vote-count-icon"></span>{" "}
            {movieDetails.vote_count}
          </span>
        </div>
        <span className="movie__overview">{movieDetails.overview}</span>
      </div>
    </div>
  );
}

export default Movie;
