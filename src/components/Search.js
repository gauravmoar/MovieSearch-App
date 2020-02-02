import React from "react";
import { useState } from "react";
// import logo from "../film.svg";
import logo2 from "../movie-camera.svg";

function Search({ setQuery, title }) {
  const [Search, setSearch] = useState("");

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const updateQuery = e => {
    e.preventDefault();

    setQuery(Search);
    setSearch("");
  };
  return (
    <div className="navbar-container">
      <div className="nav-bar">
        <header className="header">
          <div className="img-container">
            <img
              src={logo2}
              width="50"
              height="50"
              alt="logo"
              className="logo"
            />
          </div>
          <h1>{title}</h1>
        </header>
        <div className="search-bar">
          <form onSubmit={updateQuery} className="search-form">
            <input
              type="text"
              value={Search}
              onChange={updateSearch}
              placeholder="Search..."
              className="input-field"
            />
            <button type="submit" className="submit-button">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Search;
