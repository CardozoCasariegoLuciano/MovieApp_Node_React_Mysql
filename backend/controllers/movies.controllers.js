const connection = require("../database");

async function getAllMovies(req, res) {
  const sql = "SELECT * FROM movie";

  connection.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.json(result);
    } else {
      res.json({message: "No results found"})
    }
  });
}

async function getSingleMovie(req, res) {
  const _id = req.params.id;
  const sql = `SELECT * FROM movie WHERE id=${_id}`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.json(result);
    } else {
      res.json({message: "No results found"})
    }
  });
}

async function addNewMovie(req, res) {
  const sql = `INSERT INTO movie SET ?`;

  const Amovie = {
    nombre: req.body.name,
    estreno: req.body.year,
    descripcion: req.body.desc,
  };

  connection.query(sql, Amovie, (err) => {
    if (err) throw err;
    res.json({message: "Movie added"})
  });
}

async function editAMovie(req, res) {
  const _id = req.params.id;
  const { name, year, desc } = req.body;

  const sql = `UPDATE movie SET nombre = '${name}', estreno = ${year},descripcion = '${desc}' WHERE id = ${_id}`;

  connection.query(sql, (err) => {
    if (err) throw err;
    res.json({message: "Movie edited"})
  });
}

async function deleteAMovie(req, res) {
  const _id = req.params.id;

  const sql = `DELETE FROM movie WHERE id = ${_id}`;

  connection.query(sql, (err) => {
    if (err) throw err;
    res.json({message: "Movie deleted"})
  });
}

module.exports = {
  getAllMovies,
  getSingleMovie,
  addNewMovie,
  editAMovie,
  deleteAMovie,
};
