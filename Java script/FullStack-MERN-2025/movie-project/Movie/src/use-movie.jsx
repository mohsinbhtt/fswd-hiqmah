import { useState, useEffect } from "react";

export function useMovie() {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);

  async function movieApi() {
    const baseURl = "https://api.imdbapi.dev";
    const fetchMovieData = await fetch(`${baseURl}/titles`);
    const movieData = await fetchMovieData.json();
    const allMovies = movieData.titles;
    console.log(allMovies);
    setMovies(allMovies);
  }

  useEffect(() => {
    movieApi();
  }, []);

  const filteredMovies =
    movieName.trim() === ""
      ? movies
      : movies.filter((movie) =>
          movie.primaryTitle.toLowerCase().includes(movieName.toLowerCase())
        );

  return { movieApi, movies, movieName, setMovieName, filteredMovies };
}
