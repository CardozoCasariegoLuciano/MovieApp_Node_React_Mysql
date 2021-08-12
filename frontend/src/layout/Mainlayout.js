import React, { useContext, useEffect } from "react";
import Header from "../components/Header"
import MovieContext from "../context/moviesContext";
import temp from "../initialState_Test"

const Mainlayout = ({children}) => {

  const {setMovies} = useContext(MovieContext)

  useEffect(()=>{
    setMovies(temp)
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Header/>
       {children}
    </div>
  );
};

export default Mainlayout;


