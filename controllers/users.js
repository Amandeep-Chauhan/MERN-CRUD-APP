import {v4 as uuid} from "uuid";

const users  =[]

//createuser
export const createUser = (req, res) => {
	const body = req.body;

	users.push({...body, id: uuid()})
	res.send("User added successfully");
};

//getusers
export const getUsers = (req, res) => {
	res.send(users);
};

//get single users
export const getUser = (req, res) => {
	const { id } = req.params;

	const user = users.filter((user) => user.id === id);
	res.send(user);
};

//delete users
export const deleteUser = (req, res) => {
	const { id } = req.params;

	const user = users.filter((user) => user.id !== id);
	res.send("User deleted successfully");
};

//update users
export const updateUser = (req, res) => {
	const { id } = req.params;

	const user = users.find((user) => user.id === id);

	user.name = req.body.name;
	user.email = req.body.email;
	user.contact = req.body.contact;

	res.send("User updated successfully");
};

