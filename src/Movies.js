// src/pages/Movies.jsx
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://ghibliapi.vercel.app/films')
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div className="movies-page">
      <h1>All Ghibli Movies</h1>
      <div className="movie-grid">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}
