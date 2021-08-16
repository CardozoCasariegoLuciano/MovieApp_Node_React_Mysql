import { getMovies } from "../services/movies";

export const loadMovies = async (state, querys) => {
  const response = await getMovies(querys);

  if (
    response.data.message === "No more pages" ||
    response.data.message === "No movie found"
  ) {
    return "NO_PAGES";
  }
  if (response.status === 200) {
    state(response.data);
    return "OK";
  } else {
    console.log("Error al obtener la informacion de la base de datos");
  }
};

export const alertListener = () => {
  const alertIcon = document.getElementById("alertIcon");
  const modal = document.getElementById("importPage_modal-filetype");

  alertIcon.addEventListener("mouseenter", () => {
    modal.classList.add("show__importPage_modal-filetype");
  });

  alertIcon.addEventListener("mouseleave", () => {
    modal.classList.remove("show__importPage_modal-filetype");
  });
};
