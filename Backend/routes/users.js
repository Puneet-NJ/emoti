const express = require("express");
const jwt = require("jsonwebtoken");
const { userSigninSchema, getCompanySchema } = require("../schema");
const { User, Company } = require("../db");
const { jwtPassword } = require("../config");
const userAuth = require("../middlewares/userAuth");
const mongoose = require("mongoose");
const router = express.Router();

router.post("/signin", async (req, res) => {
	const user = userSigninSchema.safeParse(req.body);
	if (!user.success) return res.status(411).json({ msg: "Invalid inputs" });

	const userPresent = await User.findOne({
		username: req.body.username,
		password: req.body.password,
	});
	if (!userPresent) return res.status(411).json({ msg: "User doesn't exist" });

	const token = jwt.sign({ id: userPresent._id }, jwtPassword);

	res.json({ token });
});

router.get("/getCompanies", userAuth, async (req, res) => {
	const companies = await Company.find({});

	res.json({ companies });
});

router.get("/getCompany", userAuth, async (req, res) => {
	const schema = getCompanySchema.safeParse(req.query.id);
	if (!schema.success) return res.status(411).json({ msg: "Invalid inputs" });

	const id = req.query.id;
	const company = await Company.findOne({
		_id: new mongoose.Types.ObjectId(id),
	});

	if (!company) return res.status(411).json({ msg: "No company found" });

	res.json({ company });
});

module.exports = router;
