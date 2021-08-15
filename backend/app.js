const express = require("express");
const app = express();
const cors = require("cors")

//Settings
app.set("port", process.env.PORT || 3050);

//middlewear
app.use(express.json());
app.use(cors())

//routes
app.use("/api/movies", require("./routes/movies.routes"));

module.exports = app;
