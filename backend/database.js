const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123luciano456",
  database: "moviesDB",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Data base is conected");
});

module.exports = connection;
