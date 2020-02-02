import React from "react";

function Movie({ movie }) {
  return (
    <div className="movie-container">
      <p>{movie.Title}</p>
      <div className="img-container">
        <img src={movie.Poster} alt="movie poster" className="poster" />
      </div>
      <p>{movie.Year}</p>
    </div>
  );
}
export default Movie;
