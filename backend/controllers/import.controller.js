const fs = require("fs");
resolve = require("path").resolve;
const parse = require("csv-parse");
const { addToDB } = require("./movies.controllers");

function importFile(req, res) {
  const fileName = req.file.filename;
  const ext = fileName.split(".").pop();
  const fullPath = resolve("../backend/imports/" + fileName);
  let data = [];

  if (ext != "csv") {
    fs.unlinkSync(fullPath);
    res.json({
      error: "Is not a csv file",
    });
    return;
  }

  fs.createReadStream(fullPath)
    .pipe(
      parse({
        delimiter: ";",
      })
    )
    .on("data", (row) => {
      data.push(row);
    })
    .on("end", () => {
      data.forEach((elem) => addToDB(elem, res));
      res.json({
        messaje: "Importation has finished",
      });
      fs.unlinkSync(fullPath);
    });
}

module.exports = {
  importFile,
};
