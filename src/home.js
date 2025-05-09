// src/pages/Home.jsx
import HeroVideo from './HeroVideo';
import MovieCard from './MovieCard';
import ContinueWatching from './ContinueWatching';
import { useEffect, useState } from 'react';
import './Home.css'; // Assuming you have a CSS file for stylinggit

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://ghibliapi.vercel.app/films')
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div className="home">
      <HeroVideo />
      <h2>Popular</h2>
      <div className="movie-row">
        {movies.slice(0, 5).map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      <h2>Continue Watching</h2>
      <ContinueWatching />
      <h2>Studio Ghibli Movies</h2>
      <div className="movie-row">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}

export default Home;
