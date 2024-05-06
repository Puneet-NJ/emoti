const jwt = require("jsonwebtoken");
const { jwtPassword } = require("../config");

const adminAuth = (req, res, next) => {
	const token = req.headers.authorization.split(" ")[1];

	try {
		jwt.verify(token, jwtPassword);
	} catch (err) {
		return res.status(401).json({ msg: "Incorrect token" });
	}

	next();
};

module.exports = adminAuth;
