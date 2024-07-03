const Post = require("../models/post.model.js");

const getAllPost = async (req, res) => {
  try {
    const allPosts = await Post.find({});
    res.status(200).json(allPosts);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getSinglePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    if (!post) {
      res.status(404).json({ message: "Post Not Found" });
    }
    res.status(200).json(post);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const createNewPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate(id, req.body, { new: true });

    if (!post) {
      return res.status(404).json({ message: "Post Not Found" });
    }
    res.status(200).json(post);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findByIdAndDelete(id);

    if (!post) {
      res.status(404).json({
        message: "Post not found",
      });
    }
    res.status(200).json({
      message: "Product Deleted Successfully",
    });
  } catch (e) {
    res.status(505).json({ message: "Internal Server Error" });
  }
};

module.exports = { getAllPost, getSinglePost, createNewPost, updatePost, deletePost };
