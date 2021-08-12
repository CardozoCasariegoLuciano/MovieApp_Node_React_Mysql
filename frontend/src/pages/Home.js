import React, { useContext, useState } from "react";
import "../styles/pages/home.scss";
import CardMovie from "../components/Card_movie";
import Search from "../components/Search";
import MovieContext from "../context/moviesContext";
import SearchContext from "../context/searchContext";
import {FiArrowLeftCircle, FiArrowRightCircle} from "react-icons/fi"

const Home = () => {
  const { movies } = useContext(MovieContext);
  const { search } = useContext(SearchContext);
  const [page, setPage] = useState(0);

  const searchedMovies = movies.filter((mv) =>
    mv.titulo.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedMovies = () => {
    return searchedMovies.slice(page, page + 5);
  };

  const nextPage = () => {
    const rest = searchedMovies.length - (page + 5);

    if (rest >= 0) {
      setPage(page + 5);
    }
  };

  const previousPage = () => {
    if (page > 0) {
      setPage(page - 5);
    }
  };

  return (
    <div className="Home">
      <div className="Pagecontent">
        <div className="Home-content">
          <Search />

          <div className="home-Card_content">
            {searchedMovies.length === 0 ? (
              <p className="noMovies_text">No hay peliculas con ese nombre</p>
            ) : (
              paginatedMovies().map((elem) => (
                <CardMovie key={elem.id} movie={elem} />
              ))
            )}
          </div>
          <div className="paginator">
            <span onClick={previousPage} title="pagina anterior"><FiArrowLeftCircle/></span>
            <span onClick={nextPage} title="proxima pagina"><FiArrowRightCircle/></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
