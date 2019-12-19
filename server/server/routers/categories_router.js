module.exports = dal => {
  let express = require("express");
  let router = express.Router();

  router.get("/", (req, res) => {
    dal.getCategories().then(category => res.json(category));
  });

  router.get("/:id", (req, res) => {
    let id = req.params.id;
    dal.getCategory(id).then(category => res.json(category));
  });
  router.delete("/", (req, res) => {
    let id = req.body.catId;
    dal.deleteCategory(id).then(nCategorry => res.json(nCategorry));
  });

  router.post("/", async (req, res) => {
    let category = {
      categoryName: req.body.categoryName,
      books: []
    };
    // Enforcing uniquness of category name -> if name exists notify user in the alert
    let catExists = await dal.getCategoryByName(category.categoryName);
    if (catExists.length > 0) {
      res.sendStatus(403);
    } else {
      dal.createCategory(category).then(nCategorry => res.json(nCategorry));
    }
  });

  router.post("/:id", (req, res) => {
    dal
      .createBook(req.params.id, req.body.book)
      .then(updatedCategory => res.json(updatedCategory));
  });

  return router;
};
