const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useUnifiedTopology: true,
    });

    console.log("DB connection is established! 🎉");
  } catch (err) {
    console.log("MongoDB Connection Failed 🚫");
    process.exit(1);
  }
};

module.exports = connectDB;
