import React, { useContext} from "react";
import "../styles/pages/home.scss";
import CardMovie from "../components/Card_movie";
import Search from "../components/Search";
import MovieContext from "../context/moviesContext";
import {FiArrowLeftCircle, FiArrowRightCircle} from "react-icons/fi"

const Home = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div className="Home">
      <div className="Pagecontent">
        <div className="Home-content">
          <Search />

          <div className="home-Card_content">
            {movies.message === "Database is empty" ? (
              <p className="noMovies_text">Aun no hay peliculas cargadas</p>
            ) : (
              movies.map((elem) => (
                <CardMovie key={elem.m_id} movie={elem} />
              ))
            )}
          </div>
          <div className="paginator">
            <span /* onClick={previousPage}  */title="pagina anterior"><FiArrowLeftCircle/></span>
            <span /* onClick={nextPage} */ title="proxima pagina"><FiArrowRightCircle/></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
