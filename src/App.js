import React, { useEffect, useState } from "react";
import Movie from "./components/Movie.js";
import Search from "./components/Search.js";
import Footer from "./components/footer.js";
import "./App.css";

function App() {
  const title = "MovieSearch";
  const [Movies, setMovies] = useState([]);
  const [query, setQuery] = useState("avengers");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    findMovies();
  }, [query]);

  const findMovies = async () => {
    const response = await fetch(
      ` https://www.omdbapi.com/?s=${query}&apikey=25a122a3`
    );
    const data = await response.json();
    if (data.Response === "True") {
      setErrorMessage(null);
      console.log(data);
      setMovies(data.Search);
    } else {
      setErrorMessage(data.Error);
      console.log(query);
    }
  };

  return (
    <div className="main-container">
      <Search setQuery={setQuery} title={title} />
      <div className="movies-container">
        <div className="movies">
          {errorMessage ? (
            <span>{errorMessage}</span>
          ) : (
            Movies.map((movie, index) => <Movie key={index} movie={movie} />)
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
