//? Dependencies
const Posts = require("../models/posts.models");
const Users = require("../models/users.models");
const Categories = require("../models/categories.models");
const uuid = require("uuid");

const getAllPost = async () => {
  const data = await Posts.findAll({
    include: [
      {
        model: Users,
      },
      {
        model: Categories,
        // Exclude some columns on relations
        // attributes: {
        //   exclude: ["id"],
        // },
      },
    ],
    // Exclude some columns on data
    // attributes: {
    //   exclude: ["createdAt", "updatedAt", "categoryId"],
    // },
  });
  return data;
};

const getPostById = async (id) => {
  const data = await Posts.findOne({
    where: id,
  });
  return data;
};

const createPost = async (data) => {
  const newPost = await Posts.create({
    id: uuid.v4(),
    title: data.title,
    content: data.content,
    createdBy: data.userId,
    categoryId: data.categoryId,
  });
  return newPost;
};

module.exports = {
  getAllPost,
  getPostById,
  createPost,
};
