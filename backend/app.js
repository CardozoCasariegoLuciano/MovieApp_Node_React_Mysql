const express = require("express");
const app = express();
const cors = require("cors")
const config = require("./config.json")

//Settings
app.set("port", process.env.PORT || config.app.port);

//middlewear
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())

//routes
app.use("/api/movies", require("./routes/movies.route"));
app.use("/api/import", require("./routes/import.route"));


module.exports = app;
