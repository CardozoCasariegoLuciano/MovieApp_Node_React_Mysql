import React from "react";
import ReactDOM from "react-dom";
import { MovieProvider } from "./context/moviesContext";
import "./index.css";
import Routes from "./Routes";

ReactDOM.render(
  <MovieProvider>
    <Routes />
  </MovieProvider>,
  document.getElementById("root")
);
