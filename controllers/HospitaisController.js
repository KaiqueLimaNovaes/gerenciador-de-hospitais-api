var knex = require("../database/connection");

class HospitaisController {
  
  async index(req, res) {
    res.send("API EXPRESS - Rotas Hospitais");
  }
  
  async getAll(req, res) {
    try {
      const hospitais = await knex("hospitais")

      res.status(200).json({ status: "OK", hospitais });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR getAll" });
    }
  }

  async getOne(req, res) {
    const { params } = req;

    try {
      const hospital = await knex("hospitais");

      res.status(200).json({ status: "OK", hospital: hospital });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR getOne" });
    }
  }
}

module.exports = new HospitaisController();