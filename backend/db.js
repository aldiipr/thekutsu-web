
const mysql = require("mysql2");


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Pastisembuh1-2",
    database: "jastipdb"
});


module.exports = db;
