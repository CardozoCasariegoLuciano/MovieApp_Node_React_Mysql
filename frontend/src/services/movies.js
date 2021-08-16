import axios from "axios";

const baseMoviesURL = "http://localhost:3050/api/movies";

export async function getMovies({ page, title }) {
  try {
    let completeURL = baseMoviesURL;

    if (page) {
      completeURL += "?page=" + page;
    }

    if (title) {
      completeURL += (page ? "&" : "?") + "title=" + title;
    }

    const allMovies = await axios.get(completeURL);
    return allMovies;
  } catch (error) {
    console.log(error);
  }
}

export async function getAmovie(id) {
  try {
    let completeURL = baseMoviesURL + "/" + id;

    const movie = await axios.get(completeURL);

    return movie;
  } catch (error) {
    console.log(error);
  }
}

export async function addMovie(data) {
  try {
    const { title, year, description } = data;

    const resp = await axios.post(baseMoviesURL, {
      title,
      year,
      desc: description,
    });

    return resp;
  } catch (error) {
    console.log(error);
  }
}

export async function updateMovie(data, id) {
  try {
    const { title, year, description } = data;

    const resp = await axios.put(baseMoviesURL + "/" + id, {
      title,
      year,
      desc: description,
    });

    return resp;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteMovie(id) {
  try {
    const resp = await axios.delete(baseMoviesURL + "/" + id);
    return resp;
  } catch (error) {
    console.log(error);
  }
}
