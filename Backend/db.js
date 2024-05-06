const mongoose = require("mongoose");
const { mongooseURI } = require("./config");

mongoose.connect(mongooseURI);

const Admin = mongoose.model("Admin", {
	name: String,
	username: String,
	password: String,
});

const User = mongoose.model("User", {
	name: String,
	username: String,
	password: String,
});

const Company = mongoose.model("Company", {
	name: String,
	email: String,
	demoDate: [
		{
			demoStartDate: Date,
			demoEndDate: Date,
		},
	],
});

module.exports = {
	Admin,
	User,
	Company,
};
