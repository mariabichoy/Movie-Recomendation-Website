import { useState } from 'react';
import './Ourblog.module.css';
import styles from './Ourblog.module.css';

const API_KEY = '3b737878';

const recommendedMovies = [
    { title: 'Inception', year: '2010', imdbID: 'tt1375666', poster: 'https://www.themoviedb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg' },
    { title: 'Interstellar', year: '2014', imdbID: 'tt0816692', poster: 'https://www.themoviedb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
    { title: 'The Dark Knight', year: '2008', imdbID: 'tt0468569', poster: 'https://www.themoviedb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
    { title: 'Joker', year: '2019', imdbID: 'tt7286456', poster: 'https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' },
    { title: 'The Matrix', year: '1999', imdbID: 'tt0133093', poster: 'https://www.themoviedb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg' },
    { title: 'Inglourious Basterds', year: '2009', imdbID: 'tt0361748', poster: 'https://www.themoviedb.org/t/p/original/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg' },
    { title: 'The Prestige', year: '2006', imdbID: 'tt0482571', poster: 'https://www.themoviedb.org/t/p/original/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg' },
    { title: 'Shutter Island', year: '2010', imdbID: 'tt1130884', poster: 'https://www.themoviedb.org/t/p/original/kve20tXwUzqiBXnZgtYudHvKCu0.jpg' },
    { title: 'The Departed', year: '2006', imdbID: 'tt0407887', poster: 'https://www.themoviedb.org/t/p/original/i5sQfK1rHbppd1KaGZTw2FzRf3M.jpg' },
    { title: 'Django Unchained', year: '2012', imdbID: 'tt1853728', poster: 'https://www.themoviedb.org/t/p/original/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg' },
    { title: 'Avengers: Endgame', year: '2019', imdbID: 'tt4154796', poster: 'https://www.themoviedb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg' },
    { title: 'The Social Network', year: '2010', imdbID: 'tt1285016', poster: 'https://www.themoviedb.org/t/p/original/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg' },

  { title: 'Inception', year: '2010', imdbID: 'tt1375666', poster: 'https://m.media-amazon.com/images/I/51s+RmBb61L._AC_.jpg' },
  { title: 'The Dark Knight', year: '2008', imdbID: 'tt0468569', poster: 'https://m.media-amazon.com/images/I/51K8ouYrHeL._AC_.jpg' },
  { title: 'Interstellar', year: '2014', imdbID: 'tt0816692', poster: 'https://m.media-amazon.com/images/I/71n58dlF6aL._AC_SY679_.jpg' },
  { title: 'The Matrix', year: '1999', imdbID: 'tt0133093', poster: 'https://m.media-amazon.com/images/I/51EG732BV3L.jpg' },
,
  { title: 'The Shawshank Redemption', year: '1994', imdbID: 'tt0111161', poster: 'https://m.media-amazon.com/images/I/81nCqvXKkAL._AC_SY679_.jpg' },
  { title: 'The Godfather', year: '1972', imdbID: 'tt0068646', poster: 'https://m.media-amazon.com/images/I/51Y0LWj-6kL._AC_.jpg' },
  { title: 'Pulp Fiction', year: '1994', imdbID: 'tt0110912', poster: 'https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg' },
  { title: 'Forrest Gump', year: '1994', imdbID: 'tt0109830', poster: 'https://m.media-amazon.com/images/I/61-7Zb7PZ2L._AC_SY679_.jpg' },
  { title: 'Fight Club', year: '1999', imdbID: 'tt0137523', poster: 'https://m.media-amazon.com/images/I/81D+KJkO8-L._AC_SY679_.jpg' },
  { title: 'Parasite', year: '2019', imdbID: 'tt6751668', poster: 'https://m.media-amazon.com/images/I/71cQYX3U-hL._AC_SY679_.jpg' },
  { title: 'Gladiator', year: '2000', imdbID: 'tt0172495', poster: 'https://m.media-amazon.com/images/I/51A8l+FxFNL._AC_.jpg' },
  { title: 'Titanic', year: '1997', imdbID: 'tt0120338', poster: 'https://m.media-amazon.com/images/I/71rNJQ2g-EL._AC_SY679_.jpg' },
  { title: 'The Lord of the Rings: The Return of the King', year: '2003', imdbID: 'tt0167260', poster: 'https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg' },
  { title: 'The Silence of the Lambs', year: '1991', imdbID: 'tt0102926', poster: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg' },
  { title: 'Saving Private Ryan', year: '1998', imdbID: 'tt0120815', poster: 'https://m.media-amazon.com/images/I/51w0V0V0nKL._AC_.jpg' },
  { title: 'Whiplash', year: '2014', imdbID: 'tt2582802', poster: 'https://m.media-amazon.com/images/I/71P0y6gF8BL._AC_SY679_.jpg' }
];

function MovieApp() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (query) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    const data = await response.json();

    if (data.Response === 'True') {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      searchMovies(searchTerm);
    }
  };

  return (
    <div className={styles.container}>
      <h1>🎬 Movie Recommendations</h1>
    <div className={styles.searchSection}>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
      <button onClick={handleSearch} className={styles.searchButton}>Search</button>
    </div>

      {movies.length === 0 && searchTerm.trim() === '' && (
        <div className={styles.movieList}>
          {recommendedMovies.map((movie) => (
            <div className={styles.movieCard} key={movie.imdbID}>
              <img src={movie.poster} alt={movie.title} />
              <h3>{movie.title} ({movie.year})</h3>
            </div>
          ))}
        </div>
      )}

      {movies.length > 0 && (
        <>
          <div className={styles.movieList}>
            {movies.map((movie) => (
              <div className={styles.movieCard} key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} />
                <h3>{movie.Title} ({movie.Year})</h3>
              </div>
            ))}
          </div>
        </>
      )}

      {movies.length === 0 && searchTerm.trim() !== '' && (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default MovieApp;
