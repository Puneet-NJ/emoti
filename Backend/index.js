const express = require("express");
const app = express();
const appRouter = require("./routes/index");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/api/v1", appRouter);

app.listen(3001);
