const createManager = [
	{
		type: "input",
		name: "manager",
		message: "What's the ID of the manager you're searching?",
		validate: (input) => {
			if (input) {
				return true;
			} else {
				console.log("Enter manager ID");
				return false;
			}
		},
	},
];

const updateManager = [
	{
		type: "input",
		name: "id",
		message: "What's the ID of the manager you want to update?",
		validate: (input) => {
			if (input) {
				return true;
			} else {
				console.log("Enter manager ID");
				return false;
			}
		},
	},
	{
		type: "input",
		name: "manager_id",
		message: "What's the new ID of the manager?",
		validate: (input) => {
			if (input) {
				return true;
			} else {
				console.log("Please enter manager ID");
				return false;
			}
		},
	},
];

(module.exports = createManager), (module.exports = updateManager);
