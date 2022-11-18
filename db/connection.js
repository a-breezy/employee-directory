const mysql = require('mysql2');

const db = mysql.createConnection(
	{
		host: "127.0.0.1",
		user: "root",
		password: "",
		database: "office_dir",
	},
    console.log("Connected to office_dir database")
);

module.exports = db;
