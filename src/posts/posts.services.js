const postControllers = require("./posts.controllers");

const getAllPosts = (req, res) => {
  postControllers
    .getAllPost()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(200).json({ message: err.message });
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

module.exports = {
  getAllPosts,
  createPost,
};
