const postControllers = require("./posts.controllers");

const getAllPosts = (req, res) => {
  //? localhost/api/v1/posts?offset=0&limit=20
  const { offset, limit } = req.query;
  postControllers
    .getAllPost(offset, limit)
    .then((data) => {
      res.status(200).json({
        offset,
        limit,
        results: data,
      });
    })
    .catch((err) => {
      res.status(200).json({ message: err.message });
    });
};

const getPostById = (req, res) => {
  const id = req.params.id;
  postControllers
    .getPostById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json();
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const createPost = (req, res) => {
  //? ID from logged User
  const userId = req.user.id;
  const { title, content, categoryId } = req.body;
  if (title && content && userId && categoryId) {
    postControllers
      .createPost({ title, content, userId, categoryId })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json(err.message);
      });
  } else {
    res.status(400).json({
      message: "Missing data",
      fields: {
        title: "string",
        content: "string",
        categoryId: "int",
      },
    });
  }
};

const getPostsByCategory = (req, res) => {
  const categoryId = req.params.id;
  postControllers
    .getPostsByCategory(categoryId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getAllPosts,
  getPostById,
  getPostsByCategory,
  createPost,
};
