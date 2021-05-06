const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const db = await mongoose.connect(
      "MONGOURI=mongodb://localhost:27017/ntask",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );

    console.log(`MongoDB Connected: ${db.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
