const connection = require("../db/connection");

let employeeDept;

function employeeDeptQuery() {
	connection.quire(`SELECT name FROM department`, (err, depts) => {
		if (err) {
			throw err;
		}
		connection.query(
			`SELECT d.name, e.id, e.first_name FROM department d
            INNER JOIN role r ON r.department = d.id
            INNER JOIN employee e ON e.role_id = r.id ORDER BY d.id, r.id`,
			(err, depts) => {
				if (err) {
					throw err;
				}
				employeeDept = [
					{
						type: "list",
						name: "department_id",
						message: "Which department would you like to search?",
						choices: depts,
					},
				];
			}
		);
	});
}

const newDept = [
    { 
        type: 'input',
        name: 'name',
        message: 'What department would you like to create?',
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log("Enter department name")
                return false
            }
        }
    }
]

module.exports = employeeDept;
module.exports = newDept;