const mongoose = require("mongoose");

const uri = "mongodb+srv://jhukal9:jhukal9@posts.6ixbxmv.mongodb.net/?retryWrites=true&w=majority&appName=posts";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => {
    console.error("Error Connecting to Database");
  });
