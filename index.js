//import like this
const express = require("express");
const cors = require("cors");
const csurf = require("csurf");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
require("dotenv").config();
const { readdirSync } = require("fs");
const mongoose = require("mongoose");
const csrfProtection = csurf({ cookie: true });

//declare server ref
const app = express();

//declare port
const port = 8000;

//connecting database

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => console.log(err));

app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json({ limit: "5mb" }));

app.use((req, res, next) => {
  console.log("This is my middleware");
  next();
});

//this access all the routes files
readdirSync("./routes").map((r) => {
  console.log(r);
  return app.use("/", require(`./routes/${r}`));
});

app.use(csrfProtection);

app.get("/api/csrf-token", (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

//to start server
app.listen(port, () => {
  console.log("Our App is running on", port);
});
