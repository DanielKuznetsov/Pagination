require("dotenv").config({ path: "./config.env" });
const path = require("path");
const fs = require("fs");
const Post = require("../models/Post");
const connectDB = require("../config/db");

connectDB();

const posts = JSON.parse(fs.readFileSync(path.join(`${__dirname}/posts.json`)));

const importData = async () => {
  try {
    await Post.create(posts);

    console.log("Data Succesfully Imported 😛");
    process.exit();
  } catch (err) {
    console.log(`ERROR 🚫: ${err}`);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await Post.deleteMany({});

    console.log("Data Succesfully Deleted 😛");
    process.exit();
  } catch (err) {
    console.log(`ERROR 🚫: ${err}`);
    process.exit(1);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
