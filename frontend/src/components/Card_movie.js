import React, { useContext } from "react";
import "../styles/components/Card_movie.scss";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteMovie } from "../services/movies";
import MovieContext from "../context/moviesContext";
import { loadMovies } from "../utils/functions";
import { useHistory } from "react-router";
import PageContext from "../context/pageContext";

const Card_movie = ({ movie }) => {
  const { movies, setMovies } = useContext(MovieContext);
  const { page, setPage } = useContext(PageContext);
  const history = useHistory();

  const handleDelete = async (id) => {
    await deleteMovie(id);

    if (movies.length === 1 && page !== 0) {
      setPage(page - 1);
      loadMovies(setMovies, { page });
    } else if (page > 0) {
      loadMovies(setMovies, { page });
    } else {
      loadMovies(setMovies, {});
    }
  };

  const handleEdit = async (id) => {
    history.push("/edit/" + id);
  };

  return (
    <div className="card_movie">
      <div className="iconSection">
        <FiEdit
          className="card_icon card_editIcon"
          onClick={() => handleEdit(movie.m_id)}
        />
        <RiDeleteBin5Line
          className="card_icon card_deleteIcon"
          onClick={() => handleDelete(movie.m_id)}
        />
      </div>
      <div className="card_movie-content">
        <h2 className="card_title">
          {movie.m_title} <span>({movie.m_year})</span>
        </h2>
        <p className="card_description">
          <span>Descripcíon: </span>
          {movie.m_description}
        </p>
      </div>
    </div>
  );
};

export default Card_movie;
