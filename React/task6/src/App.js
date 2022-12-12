import React, { useState, useEffect } from "react";
import MoviesForm from "./components/MoviesForm";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  //useEffect hook
  useEffect(() => {
    console.log("USE EFFCT RUN");
    fetchMoviesHandler();
  }, []);

  const [movies, setMovies] = useState([]);
  //loading data state
  const [isLoading, setIsLoading] = useState(false);
  //Error State
  const [error, setError] = useState(null);
  let id;

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error("Something went wrong ....Retrying'");
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
    console.log("fetchMoviesHandler function runs");
  }

  if (error) {
    id = setTimeout(fetchMoviesHandler, 5000);
  }
  const stopRetryingHandler = () => {
    console.log("cancel button clicked");
    clearTimeout(id);
    setError(null);
  };

  return (
    <React.Fragment>
      <section>
        <MoviesForm />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <h2>'No Movies'</h2>}
        {!isLoading && error && (
          <p>
            {error} <br></br>
            <br></br>
            <button onClick={stopRetryingHandler}>Cancel </button>
          </p>
        )}
        {isLoading && <p>Loading Data...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
