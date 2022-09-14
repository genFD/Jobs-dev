const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const api = require("./routes/api");
const jobsRouter = require("./routes/jobs/jobs.routes");
const app = express();

app.use(morgan("combined"));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(jobsRouter);
// app.get("/", jobsRouter);
// app.use("/", jobsRouter);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
// console.log(path.join(__dirname, "..", "public", "index.html"));
module.exports = app;
