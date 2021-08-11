import React from "react";
import "../styles/components/header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="Pagecontent">
        <div className="header-content">
          <Link to="/" className="header-logo">
            Peliculas
          </Link>
          <div className="header-links_area">
            <Link className="link" to="/add">
              Agregar pelicula
            </Link>
            <Link className="link" to="/import">
              Impotar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
