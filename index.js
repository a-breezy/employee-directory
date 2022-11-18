const inquirer = require("inquirer");
const cTable = require("console.table");
const connection = require("./db/connection");

// add in queries here from another file (dept, employee, and role methods)

connection.connect(function (err) {
	if (err) throw err;
});
