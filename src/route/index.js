const router = require("express").Router();
const route = router;

const controller = require("../controller/index");

route.get("/", (req, res) => {
  res.send({
    message: "Hello world!",
  });
});

route.get("/api", (req, res) => {
  res.send({
    method: req.method,
    message: "Hello there 😊",
   
  });
});

route.get("/api/recipes", controller.newRecipes);
route.get("/api/recipes/:page", controller.newRecipesByPage);
route.get("/api/recipes-length/", controller.newRecipesLimit);
route.get("/api/category/recipes", controller.category);
route.get("/api/articles/new", controller.article);
route.get("/api/category/recipes/:key", controller.recipesByCategory);
route.get("/api/category/recipes/:key/:page", controller.recipesCategoryByPage);
route.get("/api/recipe/:key", controller.recipesDetail);
route.get("/api/search/", controller.searchRecipes);
route.get("/api/category/article", controller.articleCategory);
route.get("/api/category/article/:key", controller.articleByCategory);
route.get("/api/article/:tag/:key", controller.articleDetails);

route.get("*", (req, res) => {
  res.status(404).json({
    method: req.method,
    message:
      "cant find spesific endpoint, please make sure you read a documentation",
    status: false,
    code: 401,
  });
});

module.exports = route;
