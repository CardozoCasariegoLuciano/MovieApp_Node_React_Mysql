const { Router } = require("express");
const router = Router();
const {
  getAllMovies,
  getSingleMovie,
  addNewMovie,
  editAMovie,
  deleteAMovie,
} = require("../controllers/movies.controllers");

router.route("/")
    .get(getAllMovies)
    .post(addNewMovie);

router.route("/:id")
    .get(getSingleMovie)
    .put(editAMovie)    
    .delete(deleteAMovie);

module.exports = router;
