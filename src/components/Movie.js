import React from "react";
import "./Movie.css";

function Movie({ movieDetails }) {
  return (
    <>
      <div className="movie__container" data-aos="fade-in">
        <div className="movie__image-container">
          <img
            className="movie__poster"
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt={movieDetails.original_title}
          />
        </div>
        <div className="movie__details">
          <div>
            <span className="movie__rating">
              <span className="fas fa-star movie__rating-icon"></span>{" "}
              {movieDetails.vote_average}
            </span>
            <span className="movie__vote-count">
              <span className="fas fa-user movie__vote-count-icon"></span>{" "}
              {movieDetails.vote_count}
            </span>
            <span className="movie__name">{movieDetails.original_title}</span>
          </div>
          <div>
            <span className="movie__date">
              <span className="fas fa-calendar movie__date-icon"></span>
              Released on {movieDetails.release_date}{" "}
            </span>
          </div>
          <span className="movie__overview">{movieDetails.overview}</span>
        </div>
      </div>
    </>
  );
}

export default Movie;
