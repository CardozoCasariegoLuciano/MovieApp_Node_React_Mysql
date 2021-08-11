import React from "react";
import "../styles/pages/addEdit.scss";

const AddEdit = () => {
  return (
    <div className="AddEdit">
      <div className="addEdit-content">
        <form>
          <h3>Agregar una pelicula</h3>
          <label htmlFor="title">Titulo</label>
          <input type="text" placeholder="ej: Terminator" id="title" />

          <label htmlFor="date">Fecha de estreno</label>
          <input type="text" placeholder="ej: 1997" id="date" />

          <label htmlFor="description">Descripcion</label>
          <textarea
            id="description"
            name=""
            placeholder="ej: Robots, muerte y destruccion"
          ></textarea>
          <button type="submit">Crear</button>
        </form>
      </div>
    </div>
  );
};

export default AddEdit;
