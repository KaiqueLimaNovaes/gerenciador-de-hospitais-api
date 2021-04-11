var knex = require("knex")({
    
    client: "mysql2",
    connection: {
        /*
        host: "localhost",
        user: "root",
        password: "",
        database: "gerenciador_hospitais",
        */

        host: "mysqlserver.c5nn6cftxg4v.sa-east-1.rds.amazonaws.com",
        user: "admin",
        port: "3306",
        password: "UrFxf738gW864S9Q",
        database: "gerenciadorDeHospitais",
    },
});
  
module.exports = knex;