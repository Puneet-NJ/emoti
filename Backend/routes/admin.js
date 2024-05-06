const express = require("express");
const {
	adminSignupSchema,
	adminSigninSchema,
	userSignupSchema,
	userDeleteSchema,
	createCompanySchema,
	adminDeleteCompany,
} = require("../schema");
const { Admin, User, Company } = require("../db");
const jwt = require("jsonwebtoken");
const { jwtPassword } = require("../config");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const adminAuth = require("../middlewares/adminAuth");

router.post("/signup", async (req, res) => {
	const admin = adminSignupSchema.safeParse(req.body);

	if (!admin.success) return res.status(411).json({ msg: "Invalid inputs" });

	const alreadyPresent = await Admin.findOne({ username: req.body.username });
	if (alreadyPresent)
		return res.status(411).json({ msg: "Admin already signed up" });

	const createAdmin = await Admin.create(req.body);

	const token = jwt.sign({ id: createAdmin._id }, jwtPassword);

	res.json({
		msg: "Admin created successfully",
		token,
	});
});

router.post("/signin", async (req, res) => {
	const admin = adminSigninSchema.safeParse(req.body);

	if (!admin.success) return res.status(411).json({ msg: "Invalid inputs" });

	const alreadyPresent = await Admin.findOne({
		username: req.body.username,
		password: req.body.password,
	});
	if (!alreadyPresent)
		return res.status(411).json({ msg: "Wrong credentials" });

	const token = jwt.sign({ id: alreadyPresent._id }, jwtPassword);

	res.json({
		token,
	});
});

router.post("/createUser", adminAuth, async (req, res) => {
	const user = userSignupSchema.safeParse(req.body);
	if (!user.success) return res.status(411).json({ msg: "Invalid inputs" });

	const alreadyPresent = await User.findOne({ username: req.body.username });
	if (alreadyPresent)
		return res.status(411).json({ msg: "User already exists" });

	const creatUser = await User.create(req.body);

	// const token = jwt.sign({ id: creatUser._id }, jwtPassword);

	// res.json({ token });
	res.json({ msg: "User created successfully" });
});

router.delete("/deleteUser", adminAuth, async (req, res) => {
	const user = userDeleteSchema.safeParse(req.body);
	if (!user.success) return res.status(411).json({ msg: "Invalid inputs" });

	const deleteUser = await User.deleteOne({
		username: req.body.username,
		password: req.body.password,
	});
	if (deleteUser.deletedCount === 0)
		return res.status(411).json({ msg: "User doesn't exist / match" });

	res.json({ msg: "User deleted successfully" });
});

router.post("/createCompany", adminAuth, async (req, res) => {
	const company = createCompanySchema.safeParse(req.body);
	if (!company.success) return res.status(411).json({ msg: "Invalid inputs" });

	const alreadyPresent = await Company.findOne({
		name: req.body.name,
		email: req.body.email,
	});
	if (alreadyPresent) {
		const usr = alreadyPresent.demoDate.push({
			demoStartDate: req.body.demoStartDate,
			demoEndDate: req.body.demoEndDate,
		});
		await alreadyPresent.save();
		return res.json({ msg: "Company updated successfully" });
	}

	const createdCompany = await Company.create({
		name: req.body.name,
		email: req.body.email,
		demoDate: [
			{
				demoStartDate: req.body.demoStartDate,
				demoEndDate: req.body.demoEndDate,
			},
		],
	});
	res.json({ msg: "Company created successfully" });
});

router.delete("/deleteCompany", adminAuth, async (req, res) => {
	// const company = adminDeleteCompany.safeParse(req.query);
	// if (!company.success) return res.status(411).json({ msg: "Invalid inputs" });

	// const deleteCompany = await Company.deleteOne({
	// 	_id: new mongoose.Types.ObjectId(req.query.id),
	// });

	// if (deleteCompany.deletedCount === 0)
	// 	return res.status(411).json({ msg: "No company found" });

	// return res.json({ msg: "Company deleted successfully" });

	const company = adminDeleteCompany.safeParse(req.body);
	if (!company.success) return res.status(411).json({ msg: "Invalid inputs" });

	const deleteCompany = await Company.deleteOne({
		name: req.body.name,
		email: req.body.email,
	});

	if (deleteCompany.deletedCount === 0)
		return res.status(411).json({ msg: "Customer doesn't exist / match" });

	res.json({ msg: "Customer deleted successfully" });
});

module.exports = router;
