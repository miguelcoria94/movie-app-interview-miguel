import React, { useState, useEffect } from "react";
import FilterBar from "./components/FilterBar";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import axios from "axios";
import "./index.css";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [movieListTitle, setMovieListTitle] = useState("Most Popular");
  const [noList, setNoList] = useState(false);
  const [popularMovies, setPopularMovies] = useState([]);

  // in a production app I would store this in a .env file for security reasons
  const apiKey = "523c98deb5331759a71c32c9e900c1da";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      )
      .then(function (response) {
        // handle success
        setPopularMovies(response.data.results);
        setMovieList(response.data.results);
      })
      .catch(function (error) {
        // handle error
      });
  }, []);

  return (
    <>
      <FilterBar
        setMovieList={setMovieList}
        setMovieListTitle={setMovieListTitle}
        setNoList={setNoList}
        movieList={movieList}
        popularMovies={popularMovies}
      />
      <Movies movieList={movieList} movieListTitle={movieListTitle} />
      <Footer />
    </>
  );
}

export default App;
