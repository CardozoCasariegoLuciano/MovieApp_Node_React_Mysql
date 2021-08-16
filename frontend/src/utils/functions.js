import { getMovies } from "../services/movies";

export const loadMovies = async (state) => {
  const responcse = await getMovies();

  if (responcse.status === 200) {
    state(responcse.data);
  } else {
    console.log("Error al obtener la informacion de la base de datos");
  }
};
