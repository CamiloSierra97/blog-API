//? Dependencies
const router = require("express").Router();
const categoryServices = require("./categories.services");
const { getPostsByCategory } = require("../posts/posts.services");

//? Routes

//? /api/v1/categories

router
  .route("/") //? /categories
  .get(categoryServices.getAllCategories)
  .post(categoryServices.createCategory);

router
  .route("/:id")
  .get(categoryServices.getCategoryById)
  .delete(categoryServices.deleteCategory);

router.get("/:id/posts", getPostsByCategory);

module.exports = router;
