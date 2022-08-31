const Post = require("../models/Post");

exports.getAllPosts = async (req, res) => {
  try {
    // just creating a promise and then execute the data with await
    let query = Post.find();

    const page = parseInt(req.query.page) || 1; // everything in the query comes as a string
    const pageSize = parseInt(req.query.limit) || 50;
    const skip = (page - 1) * pageSize; // sipping no documents
    const total = await Post.countDocuments();

    const pages = Math.ceil(total / pageSize);

    query = query.skip(skip).limit(pageSize);

    if (page > pages) {
      res.status(404).json({
        status: "failed",
        message: "No more posts to show",
      });
    }

    const result = await query;

    res.status(200).json({
      status: "success",
      count: result.length,
      page,
      pages,
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: "Server error",
    });
  }
};
