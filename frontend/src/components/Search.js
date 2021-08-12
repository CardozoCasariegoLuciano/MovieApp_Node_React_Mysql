import React, { useContext } from "react";
import "../styles/components/search.scss";
import { BsSearch } from "react-icons/bs";
import SearchContext from "../context/searchContext";

const Search = () => {
  const {search, setSearch } = useContext(SearchContext);

  const handleSearch = (e) => {
    setSearch(e.target.value)    
  };

  return (
    <div className="search_conteiner">
      <div className="searcher">
        <label htmlFor="input-search">
          <BsSearch />
        </label>
        <input
          type="text"
          className="input-search"
          id="input-search"
          placeholder="Que pelicula estas buscando?"
          value={search}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default Search;
