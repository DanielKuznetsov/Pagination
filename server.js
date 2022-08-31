require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes");

connectDB();

const app = express();

app.use(express.json());

app.use("/api/v1/posts", postRoutes);

const port = process.env.PORT || 3001;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));
