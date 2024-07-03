const express = require("express");
const router = express.Router();
const { createNewPost, getAllPost, getSinglePost, deletePost, updatePost } = require("../controllers/post.controller.js");

router.get("/", getAllPost);
router.get("/:id", getSinglePost);
router.post("/", createNewPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
