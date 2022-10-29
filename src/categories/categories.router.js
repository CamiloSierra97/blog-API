//? Dependencies
const router = require("express").Router();
const categoryServices = require("./categories.services");

router
  .route("/") //? /categories
  .get(categoryServices.getAllCategories)
  .post(categoryServices.createCategory);

router.get("/:id", categoryServices.getCategoryById);
router.delete("/:id", categoryServices.deleteCategory);

module.exports = router;
