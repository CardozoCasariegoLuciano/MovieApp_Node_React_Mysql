import React from "react";
import ReactDOM from "react-dom";
import { MovieProvider } from "./context/moviesContext";
import { PageProvider } from "./context/pageContext";
import { SearchProvider } from "./context/searchContext";
import "./index.css";
import Routes from "./Routes";

ReactDOM.render(
  <SearchProvider>
    <PageProvider>
      <MovieProvider>
        <Routes />
      </MovieProvider>
    </PageProvider>
  </SearchProvider>,
  document.getElementById("root")
);
