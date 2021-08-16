import React, { useContext } from "react";
import "../styles/components/search.scss";
import { BsSearch } from "react-icons/bs";
import { loadMovies } from "../utils/functions";
import MovieContext from "../context/moviesContext";
import SearchContext from "../context/searchContext";

const Search = () => {
  const { setMovies } = useContext(MovieContext);
  const { search, setSearch } = useContext(SearchContext);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    loadMovies(setMovies, { title: search });
  };

  return (
    <div className="search_conteiner">
      <div className="searcher">
        <label htmlFor="input-search" onClick={handleSearch}>
          <BsSearch />
        </label>
        <input
          type="text"
          className="input-search"
          id="input-search"
          placeholder="Que pelicula estas buscando?"
          value={search}
          onChange={handleChange}
        />

        <button onClick={handleSearch}>Buscar</button>
      </div>
    </div>
  );
};

export default Search;
