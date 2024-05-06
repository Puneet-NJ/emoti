const zod = require("zod");

const adminSignupSchema = zod.object({
	name: zod.string().min(3),
	username: zod.string().min(3),
	password: zod.string().min(3),
});

const adminSigninSchema = zod.object({
	username: zod.string().min(3),
	password: zod.string().min(3),
});

const userSignupSchema = zod.object({
	name: zod.string().min(3),
	username: zod.string().min(3),
	password: zod.string().min(3),
});

const userDeleteSchema = zod.object({
	username: zod.string().min(3),
	password: zod.string().min(3),
});

const createCompanySchema = zod.object({
	name: zod.string().min(3),
	email: zod.string().email(),
	demoStartDate: zod.coerce.date(),
	demoEndDate: zod.coerce.date(),
});

const userSigninSchema = zod.object({
	username: zod.string().min(3),
	password: zod.string().min(3),
});

const adminDeleteCompany = zod.object({
	name: zod.string().min(3),
	email: zod.string().min(3),
});

const getCompanySchema = zod.string().min(3);

module.exports = {
	adminSignupSchema,
	adminSigninSchema,
	userSignupSchema,
	userDeleteSchema,
	createCompanySchema,
	userSigninSchema,
	adminDeleteCompany,
	getCompanySchema,
};

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzY0MjNkNDFkYmU3ZjJkZDNmYzc1OSIsImlhdCI6MTcxNDkyNjQzOX0._73YTv-eFdafags8K1kUmi2v9kjt2L9t8XxwKwtnJvk
