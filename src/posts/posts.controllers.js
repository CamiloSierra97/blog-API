//? Dependencies
const Posts = require("../models/posts.models");
const Users = require("../models/users.models");
const Categories = require("../models/categories.models");
const uuid = require("uuid");

const getAllPost = async (offset, limit) => {
  const data = await Posts.findAndCountAll({
    offset: offset ? offset : 0,
    limit: limit ? limit : 10,
    //? Exclude some columns on data
    attributes: {
      exclude: ["userId", "createdAt", "updatedAt", "categoryId"],
    },
    include: [
      {
        model: Users,
        as: "user",
        attributes: ["id", "firstName", "lastName", "email"],
      },
      {
        model: Categories,
        as: "category",
        // Exclude some columns on relations
        // attributes: {
        //   exclude: ["id"],
        // },
      },
    ],
  });
  return data;
};

const getPostById = async (id) => {
  const data = await Posts.findOne({
    where: {
      id,
    },
    attributes: {
      exclude: ["userId", "categoryId"],
    },
    include: [
      {
        model: Users,
        as: "user",
        attributes: ["id", "firstName", "lastName", "email"],
      },
      {
        model: Categories,
        as: "category",
        // Exclude some columns on relations
        // attributes: {
        //   exclude: ["id"],
        // },
      },
    ],
  });
  return data;
};

const createPost = async (data) => {
  const newPost = await Posts.create({
    id: uuid.v4(),
    title: data.title,
    content: data.content,
    userId: data.userId,
    categoryId: data.categoryId,
  });
  return newPost;
};

const getPostsByCategory = async (categoryId) => {
  const data = await Posts.findAll({
    where: {
      categoryId,
    },
  });
  return data;
};

module.exports = {
  getAllPost,
  getPostById,
  getPostsByCategory,
  createPost,
};
