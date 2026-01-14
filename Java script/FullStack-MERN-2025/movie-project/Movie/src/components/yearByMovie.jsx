import React from 'react';

const SimpleMovieList = ({ movies }) => {
  return (
    <div>
      <div>
        <h2>1990-2000</h2>
        {movies
          .filter(movie => movie.startYear >= 1990 && movie.startYear <= 2000)
          .map(movie => (
            <div key={movie.id}>
              <h3>{movie.title} ({movie.startYear})</h3>
              <div className='movie-title'>{movie.primaryTitle}</div>
          <div className='movie-poster'>
            <img src={movie.primaryImage.url} alt={movie.primaryTitle} />
          </div>
            </div>
          ))
        }
      </div>

      <div >
        <h2>2001-2010</h2>
        {movies
          .filter(movie => movie.startYear >= 2001 && movie.startYear <= 2010)
          .map(movie => (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <div className='movie-title'>{movie.primaryTitle}</div>
          <div className='movie-poster'>
            <img src={movie.primaryImage.url} alt={movie.primaryTitle} />
          </div>
            </div>
          ))
        }
      </div>

      <div>
        <h2>2011-2020</h2>
        {movies
          .filter(movie => movie.startYear >= 2011 && movie.startYear <= 2020)
          .map(movie => (
            <div key={movie.id}>
              <h3>{movie.title} </h3>
              <div className='movie-title'>{movie.primaryTitle}</div>
          <div className='movie-poster'>
            <img src={movie.primaryImage.url} alt={movie.primaryTitle} />
          </div>
            </div>
          ))
        }
      </div>

      <div>
        <h2>2021-2025</h2>
        {movies
          .filter(movie => movie.startYear >= 2021 && movie.startYear <= 2025)
          .map(movie => (
            <div key={movie.id}>
              <h3>{movie.title} </h3>
              <div className='movie-title'>{movie.primaryTitle}</div>
          <div className='movie-poster'>
            <img src={movie.primaryImage.url} alt={movie.primaryTitle} />
          </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default SimpleMovieList;