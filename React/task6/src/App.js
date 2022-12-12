import React, { useState, useEffect, useCallback } from "react";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let id;
  let loadedData = [];

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-a29a5-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!...Retrying");
      }

      const data = await response.json();
      loadedData = [];
      for (const key in data) {
        loadedData.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releseDate: data[key].releseDate,
        });
      }
      setMovies(loadedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  if (error) {
    id = setTimeout(fetchMoviesHandler, 5000);
  }

  //stop retry after cancel button clicked
  const stopRetryingHandler = useCallback(() => {
    console.log("stopRetryingHandler function ran");
    clearTimeout(id);
    setError(null);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const addMovies = useCallback(async (movie) => {
    try {
      const response = await fetch(
        "https://react-http-a29a5-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
        {
          method: "POST",
          body: JSON.stringify(movie),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      //update movie ID receievd from Backend and update movie state
      movie.id = data.name;
      setMovies((movies) => [...movies, movie]);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  //delete movie
  const deleteMovie = useCallback(async (title) => {
    let id;
    let elementToBeDeleted;
    console.log("movies before loop", movies);
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].title === title) {
        elementToBeDeleted = i;
        id = movies[i].id;
        break;
      }
    }
    try {
      const response = await fetch(
        `https://react-http-a29a5-default-rtdb.asia-southeast1.firebasedatabase.app/${id}.json`,
        {
          method: "DELETE",
          body: null,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // remove deleted element from movie array and update the state
      movies.splice(elementToBeDeleted, 1);
      setMovies([...movies]);
    } catch (error) {
      setError(error.message);
    }
  });

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovies={addMovies} onDeleteMovies={deleteMovie} />
      </section>
      <section>
        <Button onClick={fetchMoviesHandler}>Fetch Movies</Button>
        <Button onClick={stopRetryingHandler}>Stop Retrying</Button>
      </section>
      {isLoading && (
        <section>
          <h2>Data is Loading...</h2>
        </section>
      )}
      {!isLoading && error && (
        <section>
          <p>{error}</p>
        </section>
      )}
      {!isLoading && movies.length > 0 && (
        <section>
          <MoviesList movies={movies} />
        </section>
      )}
    </React.Fragment>
  );
}

export default App;
