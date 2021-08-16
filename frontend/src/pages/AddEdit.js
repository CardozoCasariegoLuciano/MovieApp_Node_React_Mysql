import React, { useContext, useState } from "react";
import MovieContext from "../context/moviesContext";
import { useShowAlert } from "../hooks/useShowAlert";
import { addMovie } from "../services/movies";
import "../styles/pages/addEdit.scss";
import { loadMovies } from "../utils/functions";

const AddEdit = ({ history }) => {
  const [setAlert, isOpen, alertText] = useShowAlert();

  const { movies, setMovies } = useContext(MovieContext);
  const [newMovie, setNewMovie] = useState({
    title: "",
    year: 0,
    description: "",
  });

  const handleChange = (e) => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, year, description } = newMovie;
    const yearToday = new Date().getFullYear();

    if (title.length === 0 || year === 0 || description.length === 0) {
      const text = "Complete todos los campos";
      setAlert(text);
    } else if (isNaN(year) || year > yearToday) {
      const text = "La fecha de estreno tiene que ser un año valido";
      setAlert(text);
    } else if (movies.some((elem) => elem.m_title === title)) {
      const text = "Ya existe una pelicula con ese nombre";
      setAlert(text);
    } else {
      await addMovie(newMovie);
      loadMovies(setMovies);
      history.goBack();
    }
  };

  return (
    <div className="AddEdit">
      <div className="addEdit-content">
        <form onSubmit={handleSubmit}>
          <h3>Agregar una pelicula</h3>
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            placeholder="ej: Terminator"
            id="title"
            name="title"
            onChange={handleChange}
          />

          <label htmlFor="date">Fecha de estreno</label>
          <input
            type="text"
            placeholder="ej: 1997"
            id="date"
            name="year"
            onChange={handleChange}
          />

          <label htmlFor="description">Descripcion</label>
          <textarea
            id="description"
            name="description"
            placeholder="ej: Robots, muerte y destruccion"
            onChange={handleChange}
          ></textarea>
          {isOpen && <div className="alertArea">{alertText}</div>}

          <button type="submit">Crear</button>
        </form>
      </div>
    </div>
  );
};

export default AddEdit;
