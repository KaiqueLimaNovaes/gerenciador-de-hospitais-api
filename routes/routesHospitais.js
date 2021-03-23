var express = require("express");
var app = express();
var routerHospitais = express.Router();
var hospitaisController = require("../controllers/HospitaisController");

routerHospitais.get("/", hospitaisController.getAll);

module.exports = routerHospitais;