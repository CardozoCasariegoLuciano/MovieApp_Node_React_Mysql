const connection = require("../database/database");

function getAllMovies(req, res) {
  const title = req.query.title;
  const numPerPage = parseInt(req.query.npp, 10) || 9;
  const page = parseInt(req.query.page, 10) || 0;

  const skip = page * numPerPage;

  const limit = skip + "," + numPerPage;
  const search = ` WHERE m_title LIKE "%${title}%" `;

  const sql = "SELECT * FROM movie" + (title ? search : "") + ` limit ${limit}`;

  if (page < 0) {
    res.json({
      error: "Invalid page",
    });
    return;
  }

  connection.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.json(result);
    } else {
      if (title) {
        res.json({ message: "No movie found" });
      } else if (page) {
        res.json({ message: "No more pages" });
      } else {
        res.json({ message: "Database is empty" });
      }
    }
  });
}

function getSingleMovie(req, res) {
  const _id = req.params.id;
  const sql = `SELECT * FROM movie WHERE m_id=${_id}`;

  connection.query(sql, (err, result) => {
    if (!err) {
      if (result.length > 0) {
        res.json(result);
      } else {
        res.statusMessage = "NO_RESULTS";
        res.json({ message: "No results found" });
      }
    } else {
      if (err.code === "ER_BAD_FIELD_ERROR") {
        res.json({ error: "Field type error" });
      } else {
        throw err;
      }
    }
  });
}

function addNewMovie(req, res) {
  const { title, year, desc } = req.body;

  if (title && year && desc) {
    const sql = `INSERT INTO movie SET ?`;

    if (isNaN(year)) {
      res.json({ error: "Year must be a number" });
      return;
    }

    const Amovie = {
      m_title: title,
      m_year: year,
      m_description: desc,
    };
    connection.query(sql, Amovie, (err) => {
      if (!err) {
        res.json({ message: "Movie added" });
      } else {
        if (err.code === "ER_DUP_ENTRY") {
          res.statusMessage = "REPEATED";
          res.json({ error: "There is already a movie with the same title" });
        } else {
          throw err;
        }
      }
    });
  } else {
    res.json({ error: "Some fields are empty" });
  }
}

function editAMovie(req, res) {
  const _id = req.params.id;
  const { title, year, desc } = req.body;

  if (title && year && desc) {
    const sql = `UPDATE movie SET m_title = '${title}', m_year = ${year},m_description = '${desc}' WHERE m_id = ${_id}`;

    connection.query(sql, (err, result) => {
      if (!err) {
        if (result.affectedRows > 0) {
          res.json({ message: "Movie edited" });
        } else {
          res.json({ error: `the id ${_id} does not exists` });
        }
      } else {
        switch (err.code) {
          case "ER_DUP_ENTRY":
            res.statusMessage = "REPEATED";
            res.json({ error: "There is already a movie with the same title" });
            break;
          case "ER_BAD_FIELD_ERROR":
            res.json({ error: "Field type error" });
            break;
          default:
            throw err;
        }
      }
    });
  } else {
    res.status(500).json({ error: "Some fields are empty" });
  }
}

function deleteAMovie(req, res) {
  const _id = req.params.id;

  const sql = `DELETE FROM movie WHERE m_id = ${_id}`;

  connection.query(sql, (err, result) => {
    if (!err) {
      if (result.affectedRows > 0) {
        res.json({ message: "Movie deleted" });
      } else {
        res.json({ error: `the id ${_id} does not exists` });
      }
    } else {
      if (err.code === "ER_BAD_FIELD_ERROR") {
        res.json({ error: "Field type error" });
      } else {
        throw err;
      }
    }
  });
}

function addToDB(elem, res) {
  const title = elem[0];
  const desc = elem[1];
  const year = elem[2];

  if (title && year && desc) {
    const sql = `INSERT INTO movie SET ?`;

    const Amovie = {
      m_title: title,
      m_year: year,
      m_description: desc,
    };

    connection.query(sql, Amovie, (err) => {
      if (err) {
        switch (err.code) {
          case "ER_DUP_ENTRY":
            res.destroy();
            return;
          default:
            console.log(err);
            return;
        }
      }
    });
  } else {
    res.json({ error: "Some fields are empty" });
    return;
  }
}

module.exports = {
  getAllMovies,
  getSingleMovie,
  addNewMovie,
  editAMovie,
  deleteAMovie,
  addToDB,
};
