import React, { useContext, useEffect, useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import MovieContext from "../context/moviesContext";
import { useShowAlert } from "../hooks/useShowAlert";
import { importCSVfile } from "../services/importMovie";
import "../styles/pages/importPage.scss";
import { alertListener, loadMovies } from "../utils/functions";

const ImportsPage = ({ history }) => {
  const [file, setFile] = useState(null);
  const { setMovies } = useContext(MovieContext);
  const [setAlert, isOpen, alertText] = useShowAlert();

  useEffect(() => {
    alertListener();
  }, []);

  const handleSelectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file && file.name.split(".").pop() === "csv") {
      const formData = new FormData();
      formData.append("file", file);
      await importCSVfile(formData);

      loadMovies(setMovies, {});
      history.push("/");
    } else {
      const text = "Selecciona un archivo valido";
      setAlert(text);
    }
  };

  return (
    <div className="importsPage">
      <div className="importPage-content">
        <form onSubmit={handleSubmit}>
          <h2>
            Importar <FiAlertCircle className="alertIcon" id="alertIcon" />
          </h2>
          <div
            className="importPage_modal-filetype"
            id="importPage_modal-filetype"
          >
            <div className="modal_filetype-punta"></div>
            <p>Solo se pueden importar archivos .csv</p>
          </div>
          <input type="file" onChange={handleSelectFile} />

          {isOpen && <div className="alertArea">{alertText}</div>}

          <button type="submit">Agregar</button>
        </form>
      </div>
    </div>
  );
};

export default ImportsPage;
