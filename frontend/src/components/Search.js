import React from "react";
import "../styles/components/search.scss"
import {BsSearch} from "react-icons/bs"

const Search = () => {
  return (
    <div className="search_conteiner">
      <div className="searcher">
        <label htmlFor="input-search"><BsSearch/></label>
        <input
          type="text"
          className="input-search"
          id="input-search"
          placeholder="Que pelicula estas buscando?"
        />
      </div>
    </div>
  );
};

export default Search;
