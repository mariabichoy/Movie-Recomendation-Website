import React, { useState, useEffect } from "react";
import "./catiegories.css";

const API_KEY = "54ee1402";

const categories = {
  Action: "action",
  Comedy: "comedy",
  Drama: "drama"
};

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (term) => {
    setLoading(true);
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${term}`);
    const data = await res.json();

    if (data.Response === "True") {
      const detailed = await Promise.all(
        data.Search.map(async (movie) => {
          const detailRes = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`);
          return await detailRes.json();
        })
      );
      setMovies(detailed);
    } else {
      setMovies([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchMovies("action"); 
  }, []);

  return (
    <div className="movie-container">
      <h1>🎬 Movie Categories</h1>
      <div className="category-buttons">
        {Object.keys(categories).map((cat) => (
          <button key={cat} onClick={() => fetchMovies(categories[cat])}>
            {cat}
          </button>
        ))}
      </div>
      {loading ? (
        <p style={{ textAlign: "center", color: "#ccc" }}>Loading...</p>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
                alt={movie.Title}
              />
              <div className="movie-info">
                <h2>{movie.Title}</h2>
                <p><strong>Year:</strong> {movie.Year}</p>
                <p><strong>Genre:</strong> {movie.Genre}</p>
                <p><strong>Actors:</strong> {movie.Actors}</p>
                <a
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(movie.Title + " trailer")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🎥 Watch Trailer
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieList;
