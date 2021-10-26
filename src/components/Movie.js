import React from "react";
import "./Movie.css";

function Movie({ movieDetails }) {
  return <div>{movieDetails.original_title}</div>;
}

export default Movie;
