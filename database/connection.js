var knex = require("knex")({
    
    client: "mysql2",
    connection: {
        //host: "localhost",
        host: "http://192.168.0.25:3306",
        user: "root",
        port: "3306",
        password: "30011995",
        //database: "gerenciador_hospitais",
        database: "gerenciadorDeHospitais",
    },
});
  
module.exports = knex;