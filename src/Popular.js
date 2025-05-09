// src/pages/Popular.jsx
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const popularTitles = [
  "Spirited Away",
  "Howl's Moving Castle",
  "My Neighbor Totoro",
  "Ponyo",
  "The Secret World of Arrietty"
];

export default function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch('https://ghibliapi.vercel.app/films')
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(movie => popularTitles.includes(movie.title));
        setPopular(filtered);
      });
  }, []);

  return (
    <div className="popular-page">
      <h1>Popular Ghibli Movies</h1>
      <div className="movie-grid">
        {popular.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}
