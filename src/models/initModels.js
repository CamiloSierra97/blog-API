const Users = require("./users.models");
const Posts = require("./posts.models");
const Categories = require("./categories.models");

const initModels = () => {
  //? Relations between Posts and Users
  Posts.belongsTo(Users);
  Users.hasMany(Posts);

  //? Relations between Posts and Categories
  Posts.belongsTo(Categories);
  Categories.hasMany(Posts);
};

module.exports = initModels;
