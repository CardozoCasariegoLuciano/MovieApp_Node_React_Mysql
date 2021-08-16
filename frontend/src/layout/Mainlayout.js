import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import MovieContext from "../context/moviesContext";
import { loadMovies } from "../utils/functions";

const Mainlayout = ({ children }) => {
  const { setMovies } = useContext(MovieContext);

  useEffect(() => {
    loadMovies(setMovies);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Mainlayout;
