// src/pages/MyList.jsx
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

export default function MyList() {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('myList')) || [];
    setMyList(storedList);
  }, []);

  return (
    <div className="mylist-page">
      <h1>My Ghibli List</h1>
      {myList.length === 0 ? (
        <p>No movies in your list yet.</p>
      ) : (
        <div className="movie-grid">
          {myList.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      )}
    </div>
  );
}
