import React, { createContext, useState } from "react";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const data = { movies, setMovies };

  return (
    <MovieContext.Provider value={data}>{children}</MovieContext.Provider>
  );
};

export { MovieProvider };
export default MovieContext;
