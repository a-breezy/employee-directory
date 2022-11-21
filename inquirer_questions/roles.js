let newRole;

function newRoleQuery() {
	connection.query("SELECT id AS value, name FROM department", (err, dept) => {
		if (err) {
			throw err;
		}
		newRole = [
			{
				type: "input",
				name: "title",
				message: "What role would you like to create?",
				validate: (newRoleInput) => {
					if (newRoleInput) {
						return true;
					} else {
						console.log("Enter a role name");
						return false;
					}
				},
			},
			{
				type: "list",
				name: "department_id",
				message: "What department does this role belong to?",
				choices: dept,
			},
			{
				type: "input",
				name: "salary",
				message: "What is the salary for the role?",
				validate: (roleSalaryInput) => {
					if (roleSalaryInput) {
						return true;
					} else {
						console.log("Enter a salary");
						return false;
					}
				},
			},
		];
	});
}

module.exports = newRoleQuery;