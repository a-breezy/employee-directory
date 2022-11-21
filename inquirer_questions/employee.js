let newEmployee;
function newEmployeeQueries() {
	connection.query(
		"SELECT id AS value, title AS name FROM role",
		(err, roles) => {
			if (err) {
				throw err;
			}
			connection.query(
				"SELECT id AS value, CONCAT(first_name, ' ', last_name) AS name FROM employee",
				(err, employees) => {
					if (err) {
						throw err;
					}
					newEmployee = [
						{
							type: "input",
							name: "first_name",
							message: "What's the new employee's first name?",
							validate: (firstNameInput) => {
								if (firstNameInput) {
									return true;
								} else {
									console.log("first name");
									return false;
								}
							},
						},
						{
							type: "input",
							name: "last_name",
							message: "What's the new employee's lastname?",
							validate: (lastNameInput) => {
								if (lastNameInput) {
									return true;
								} else {
									console.log("last name");
									return false;
								}
							},
						},
						{
							type: "list",
							name: "role_id",
							message: "What's the employee's role?",
							choices: roles,
						},
						{
							type: "list",
							name: "manager_id",
							message: "Who's the employee's manager?",
							choices: employees, // placeholders for whatever user defines departments as
						},
					];
				}
			);
		}
	);
}

let updateEmployeeRole;
function getEmployeeRoleInfo() {
	connection.query(
		"SELECT id AS value, title AS name FROM role",
		(err, roles) => {
			if (err) {
				throw err;
			}
			connection.query(
				"SELECT id AS value, CONCAT(first_name, ' ', last_name) AS name FROM employee",
				(err, employees) => {
					if (err) {
						throw err;
					}
					updateEmployeeRole = [
						{
							type: "list",
							name: "employee_id",
							message: "What employee id are you updating?",
							choices: employees,
						},
						{
							type: "list",
							name: "role_id",
							message: "What's the employee's new role?",
							choices: roles,
						},
					];
				}
			);
		}
	);
}

module.exports = newEmployeeQueries;
module.exports = getEmployeeRoleInfo;
