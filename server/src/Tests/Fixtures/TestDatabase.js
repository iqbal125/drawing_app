const pg = require("pg")
const {Pool} = pg

//Add credentials for test db

// Standard Syntax
const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "",
  port: 5432,
})

module.exports = db
