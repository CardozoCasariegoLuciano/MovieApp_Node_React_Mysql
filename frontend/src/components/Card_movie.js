import React from "react";
import "../styles/components/Card_movie.scss";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

const Card_movie = ({ movie }) => {
  return (
    <div className="card_movie">
      <div className="iconSection">
        <FiEdit className="card_icon card_editIcon" />
        <RiDeleteBin5Line className="card_icon card_deleteIcon" />
      </div>
      <div className="card_movie-content">
        <h2 className="card_title">
          {movie.titulo} <span>({movie.fechaEstreeno})</span>
        </h2>
        <p className="card_description">
          <span>Descripcíon: </span>
          {movie.descripcion}
        </p>
      </div>
    </div>
  );
};

export default Card_movie;
