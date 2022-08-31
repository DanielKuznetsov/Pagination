const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  body: {
    type: String,
    required: [true, "Please provide a body!"],
  },
  author: {
    type: String,
    required: [true, "Please provide an author!"],
  },
  title: {
    type: String,
    required: [true, "Please provide a title!"],
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
