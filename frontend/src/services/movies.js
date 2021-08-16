import axios from "axios";

const moviesURL = "http://localhost:3050/api/movies";
//const importURL = "http://localhost:3050/api/import";

export async function getMovies() {
  try {
    const allMovies = await axios.get(moviesURL);
    return allMovies;
  } catch (error) {
    console.log(error);
  }
}

export async function addMovie(data) {
  try {
    const { title, year, description } = data;

    const resp = await axios.post(moviesURL, {
      title,
      year,
      desc : description ,
    });    
    
    return resp;
  } catch (error) {
    console.log(error);
  }
}
