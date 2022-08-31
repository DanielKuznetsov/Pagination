require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");

connectDB();

const app = express();

const port = process.env.PORT || 3001;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));
