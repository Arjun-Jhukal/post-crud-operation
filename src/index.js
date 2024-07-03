const express = require("express");
const postRoutes = require("./routes/post.route.js");
const app = express();
const PORT = 3000;

app.use(express.json());

const mongoose = require("mongoose");

const uri = "mongodb+srv://jhukal9:jhukal9@posts.6ixbxmv.mongodb.net/?retryWrites=true&w=majority&appName=posts";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to database");

    // app.listen(PORT, () => {
    //   console.log(`Server is running at ${PORT}`);
    // });
  })
  .catch((e) => {
    console.error("Error Connecting to Database");
  });

app.use("/api/v1/post", postRoutes);
