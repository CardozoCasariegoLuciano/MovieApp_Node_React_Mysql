import React from "react";
import "../styles/pages/home.scss";
import temp from "../initialState_Test";
import CardMovie from "../components/Card_movie";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="Home">
      <div className="Pagecontent">
        <div className="Home-content">
          <Search/>

          <div className="home-Card_content">
            {temp.map((elem) => (
              <CardMovie key={elem.id} movie={elem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
