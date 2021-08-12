import React, { useEffect } from "react";
import { FiAlertCircle } from "react-icons/fi";
import "../styles/pages/importPage.scss";

const ImportsPage = () => {
  useEffect(() => {
    const alertIcon = document.getElementById("alertIcon");
    const modal = document.getElementById("importPage_modal-filetype");

    alertIcon.addEventListener("mouseenter", () => {
      modal.classList.add("show__importPage_modal-filetype");
    });

    alertIcon.addEventListener("mouseleave", () => {
      modal.classList.remove("show__importPage_modal-filetype");
    });

  }, []);

  return (
    <div className="importsPage">
      <div className="importPage-content">
        <form>
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
          <input type="file" />

          <button type="submit">Agregar</button>
        </form>
      </div>
    </div>
  );
};

export default ImportsPage;
