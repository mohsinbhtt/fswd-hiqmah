import Stars from "./stars"
import MoviePlot from "./Movie-plot"
import NotesBox from "./review-notes";
import { useState, useEffect } from "react";

export default function MovieCard({movies}){
  
    return(
      <div className=" flex flex-col-reverse">


      <div className="grid grid-cols-5 grid-rows-1 gap-4 p-4">
   { 
    movies.filter(movie => movie.startYear >= 1990 && movie.startYear <= 2000).map((movie) => (
      <div className='movie-item' key={movie.id}>
          <div className='movie-title'>{movie.primaryTitle}</div>
          <div className='movie-poster'>
            <img src={movie.primaryImage.url} alt={movie.primaryTitle} />
          </div>
        
          <MoviePlot  movie={movie}/>
          <Stars  />

          {rating > 0 && ( <NotesBox  />   )}
        </div>
      ))}
     </div>

      <h2>1990-2000</h2>


     <div className="grid grid-cols-5 grid-rows-1 gap-4 p-4">
    {
      movies.filter(movie => movie.startYear >= 2001 && movie.startYear <= 2010).map((movie) => (
        <div className='movie-item' key={movie.id}>
          <div className='movie-title'>{movie.primaryTitle}</div>
          <div className='movie-poster'>
            <img src={movie.primaryImage.url} alt={movie.primaryTitle} />
          </div>
        
          <MoviePlot  movie={movie}/>
          <Stars  />
          {rating > 0 && (
          <NotesBox rating={rating} />
      )}
        </div>
      )) }
      </div>
      <h2>2001-2010</h2>

      <div className="grid grid-cols-5 grid-rows-1 gap-4 p-4">
      {
        movies.filter(movie => movie.startYear >= 2011 && movie.startYear <= 2020).map((movie) => (
          <div className='movie-item' key={movie.id}>
          <div className='movie-title'>{movie.primaryTitle}</div>
          <div className='movie-poster'>
            <img src={movie.primaryImage.url} alt={movie.primaryTitle} />
          </div>
        
          <MoviePlot  movie={movie}/>
          <Stars  />
          {rating > 0 && (
        <NotesBox notes={notes || movie.notes} setNotes={setNotes} />
      )}
        </div>
      ))  
    }
      </div>
    <h2>2011-2020</h2>

      <div className=" grid grid-cols-5 grid-rows-1 gap-4 p-4">
      {
        movies.filter(movie => movie.startYear >= 2021 && movie.startYear <= 2025).map((movie) => (
          <div className='movie-item' key={movie.id}>
          <div className='movie-title'>{movie.primaryTitle}</div>
          <div className='movie-poster'>
            <img src={movie.primaryImage.url} alt={movie.primaryTitle} />
          </div>
        
          <MoviePlot  movie={movie}/>
          <Stars  />
        </div>
      ))  
    }
      </div>
    <h2>2021-2025</h2>
  </div>
)
}