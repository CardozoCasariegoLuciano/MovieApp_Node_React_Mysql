import React, { useContext, useEffect, useState } from "react";
import MovieContext from "../context/moviesContext";
import { useShowAlert } from "../hooks/useShowAlert";
import { addMovie, getAmovie, updateMovie } from "../services/movies";
import "../styles/pages/addEdit.scss";
import { loadMovies } from "../utils/functions";

const AddEdit = ({ history, match }) => {
  const [setAlert, isOpen, alertText] = useShowAlert();
  const { setMovies } = useContext(MovieContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: "",
    year: "",
    description: "",
  });

  useEffect(() => {
    editing();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const editing = async () => {
    if (match.params.id) {
      const amovie = await getAmovie(match.params.id);

      if (amovie.statusText === "NO_RESULTS") {
        history.push("/add");
      } else {
        const { m_title, m_year, m_description } = amovie.data[0];

        setNewMovie({
          title: m_title,
          year: m_year,
          description: m_description,
        });

        setIsEditing(true);
      }
    }
  };

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

    if (title.length === 0 || year.length === 0 || description.length === 0) {
      const text = "Complete todos los campos";
      setAlert(text);
    } else if (isNaN(year) || year > yearToday) {
      const text = "La fecha de estreno tiene que ser un año valido";
      setAlert(text);
    } else {
      let resp;
      if (isEditing) {
        const id = match.params.id;
        resp = await updateMovie(newMovie, id);
      } else {
        resp = await addMovie(newMovie);
      }

      if (resp.statusText === "REPEATED") {
        const text = "Ya existe una pelicula con ese nombre";
        setAlert(text);
      } else {
        loadMovies(setMovies,{});
        history.goBack();
      }
    }
  };

  return (
    <div className="AddEdit">
      <div className="addEdit-content">
        <form onSubmit={handleSubmit}>
          {isEditing ? (
            <h3>Edita la pelicula</h3>
          ) : (
            <h3>Agregar una pelicula</h3>
          )}

          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            placeholder="ej: Terminator"
            id="title"
            name="title"
            onChange={handleChange}
            value={newMovie.title}
          />

          <label htmlFor="date">Fecha de estreno</label>
          <input
            type="text"
            placeholder="ej: 1997"
            id="date"
            name="year"
            onChange={handleChange}
            value={newMovie.year}
          />

          <label htmlFor="description">Descripcion</label>
          <textarea
            id="description"
            name="description"
            placeholder="ej: Robots, muerte y destruccion"
            onChange={handleChange}
            value={newMovie.description}
          ></textarea>
          {isOpen && <div className="alertArea">{alertText}</div>}

          <button type="submit">{isEditing ? "Guardar" : "Agregar"}</button>
        </form>
      </div>
    </div>
  );
};

export default AddEdit;
