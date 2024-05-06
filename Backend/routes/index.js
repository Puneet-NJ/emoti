const express = require("express");
const router = express.Router();
const adminRouter = require("./admin");
const userRouter = require("./users");

router.use("/admin", adminRouter);
router.use("/user", userRouter);

module.exports = router;
