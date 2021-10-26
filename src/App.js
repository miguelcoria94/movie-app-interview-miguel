import React, { useState, useEffect } from "react";
import FilterBar from "./components/FilterBar";
import Movies from "./components/Movies";
import axios from "axios";
import "./index.css";

function App() {
  const [movieList, setMovieList] = useState([]);

  // in a production app I would store this in a .env file for security reasons
  const apiKey = "523c98deb5331759a71c32c9e900c1da";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      )
      .then(function (response) {
        // handle success
        setMovieList(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <FilterBar />
      <Movies movieList={movieList} />
    </>
  );
}

export default App;
