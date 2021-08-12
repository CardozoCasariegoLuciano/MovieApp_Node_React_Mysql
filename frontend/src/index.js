import React from "react";
import ReactDOM from "react-dom";
import { MovieProvider } from "./context/moviesContext";
import { SearchProvider } from "./context/searchContext";
import "./index.css";
import Routes from "./Routes";

ReactDOM.render(
  <MovieProvider>
    <SearchProvider>
      <Routes />
    </SearchProvider>
  </MovieProvider>,
  document.getElementById("root")
);
