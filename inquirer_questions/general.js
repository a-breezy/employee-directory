const questions = [
	{
		type: "list",
		name: "options",
		message: "What would you like to do?",
		choices: [
			"View all departments",
			"View all roles",
			"View all employees",
			"View employees by manager",
			"View employees by department",
			"Add new department",
			"Add new role",
			"Add new employee",
			"Update exisiting employee's role",
			"Update exisiting employee's manager",
		],
	},
];

module.exports = questions;
