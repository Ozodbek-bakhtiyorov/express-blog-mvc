
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, (err) => {
  if (!err) {
    console.log("MongoDB connected successfully...".yellow);
  } else {
    console.log(`Error with Mongodb connection ${err.message}`.bgWhite.red);
  }
});