import React from "react";
import Movie from "./Movie";
import "./Movies.css";

function Movies({ movieList, movieListTitle, modalIsOpen, setIsOpen }) {
  return (
    <>
      <div className="movies__list-title-div">
        <span>{movieListTitle}</span>
      </div>
      <div className="movies__grid">
        {movieList.map((movie) => {
          return (
            <Movie
              movieDetails={movie}
              key={movie.id}
              modalIsOpen={modalIsOpen}
              setIsOpen={setIsOpen}
            />
          );
        })}
      </div>
    </>
  );
}

export default Movies;
