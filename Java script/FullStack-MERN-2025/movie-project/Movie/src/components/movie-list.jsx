import MovieCard from "./movie-card";
export default function MovieList({ movies }) {
  return (
    <div className='movie-list'>
      {movies.length > 0 ? (
      <MovieCard movies={movies}  />       ) : (
        "NO MOVIES FOUND"
      )}
    </div>
  );
}