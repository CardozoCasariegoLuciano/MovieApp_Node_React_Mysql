const mysql = require("mysql");
const config = require("../config.json")

const connection = mysql.createConnection({
  host: config.dataBase.host,
  user: config.dataBase.user,
  password: config.dataBase.password,
  database: config.dataBase.database,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Data base is conected");
});

module.exports = connection;
