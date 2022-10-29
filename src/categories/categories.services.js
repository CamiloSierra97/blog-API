const categoriesControllers = require("./categories.controllers");

// /categories
const getAllCategories = (req, res) => {
  categoriesControllers
    .getAllCategories()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

// /categories
const getCategoryById = (req, res) => {
  const id = req.params.id
  categoriesControllers
    .getCategoryById(id)
    .then((data) => {
      if (data) {
        res.status(200).json({ data });
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

// /categories/:id
const createCategory = (req, res) => {
  const { name } = req.body;
  if (name) {
    categoriesControllers
      .createCategory(name)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({ message: "Missing data", description: res.message });
  }
};

const deleteCategory = (req, res) => {
  const id = req.params.id;
  categoriesControllers
    .deleteCategory(id)
    .then((data) => {
      if (data != 0) {
        res.status(201).json({ message: data.message });
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  deleteCategory,
};
