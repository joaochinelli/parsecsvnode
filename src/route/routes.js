const express = require("express");
const routes = express.Router();
const csvController = require("../controllers/csvController");
const upload = require("../use/upload");

routes.post("/api/csv/upload", upload.single("file"), csvController.upload);

module.exports = routes;