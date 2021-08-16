const { Router } = require("express");
const router = Router();
const upload = require("../helpers/helper_multer")
const {importFile} = require("../controllers/import.controller");


router.route("/")
    .post(upload.single("file"), importFile)
   
module.exports = router;