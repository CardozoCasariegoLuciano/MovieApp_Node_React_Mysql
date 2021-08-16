import React, { useContext, useEffect, useState } from "react";
import "../styles/pages/home.scss";
import CardMovie from "../components/Card_movie";
import Search from "../components/Search";
import MovieContext from "../context/moviesContext";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { loadMovies } from "../utils/functions";
import PageContext from "../context/pageContext";
import SearchContext from "../context/searchContext";

const Home = () => {
  const { movies, setMovies } = useContext(MovieContext);
  const { page, setPage } = useContext(PageContext);
  const { search } = useContext(SearchContext);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    console.log(search)
    console.log(page)
    pagination();
  }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

  const pagination = () => {
    loadMovies(setMovies, { page, title: search }).then((msg) => {
      if (msg === "NO_PAGES") {
        setIsLastPage(true);
        setPage(page - 1);
      }
    });
  };

  const nextPage = () => {
    if (!isLastPage) {
      setPage(page + 1);
    }
  };

  const previousPage = () => {
    if (page !== 0) {
      setPage(page - 1);
      setIsLastPage(false);
    }
  };

  return (
    <div className="Home">
      <div className="Pagecontent">
        <div className="Home-content">
          <Search />

          <div className="home-Card_content">
            {movies.message === "Database is empty" ? (
              <p className="noMovies_text">Aun no hay peliculas cargadas</p>
            ) : (
              movies.map((elem) => <CardMovie key={elem.m_id} movie={elem} />)
            )}
          </div>
          <div className="paginator">
            <span onClick={previousPage} title="pagina anterior">
              <FiArrowLeftCircle />
            </span>

            <span onClick={nextPage} title="proxima pagina">
              <FiArrowRightCircle />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
