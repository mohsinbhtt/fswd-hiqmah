import { useState, useEffect, useRef } from "react";
import Input  from './components/input';
import MovieList from './components/movie-list';
import MovieDashboard from './components/movie-dashboard'
import Dropbox from "./components/dropbox";
import MovieListByYears from './components/yearByMovie';
import {useMovie} from "./use-movie"
import './App.css'



function App() {
//   const [movieName,setMovieName] = useState('')
//   const [movies,setMovies] = useState([])
  

  
//   async function movieApi(){
//     const baseURl = "https://api.imdbapi.dev"
//     const fetchMovieData = await fetch(`${baseURl}/titles`)
//     const movieData = await fetchMovieData.json()
//     const allMovies = movieData.titles
//     console.log(allMovies)
//     setMovies(allMovies)

//   }
//  useEffect(()=>{
//     movieApi()
//   },[])
 
//   const filteredMovies = movieName.trim() === "" ? movies : movies.filter((movie) =>
//     movie.primaryTitle.toLowerCase().includes(movieName.toLowerCase()));
  const {movieApi, movies, movieName, setMovieName, filteredMovies} = useMovie()

  return(
    <>

   <Input  movieName={movieName} setMovieName={setMovieName}/>
   <Dropbox movies={movies} />  
   <h2>Movie dashboard</h2>
   <MovieDashboard movies={movies} />
   <h1 className='movie-recommendation'>Movie Recommendation</h1>
   {/* <MovieListByYears movies={movies} /> */}
   <MovieList  movies={filteredMovies}  />





</>
) // return bracket closes here
}  // App component closes here



export default App
