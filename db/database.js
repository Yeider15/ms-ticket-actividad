const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
  host: process.env.DB_HOST || "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "1523",
    database: "sistema_tickets",
  },
});

module.exports = db;
