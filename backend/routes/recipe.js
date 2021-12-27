const router = require("express").Router();
const { publicPosts, privatePosts, uniqueRecipe } = require("../database");
const authToken = require("../middleware/authenticateToken");

router.get("/public", (req, res) => {
  res.json(publicPosts);
});

router.get("/private", authToken, (req, res) => {
  res.json(privatePosts);
});

router.get("/test", authToken, (req, res) => {
  console.log(req.query.id)
  res.json(uniqueRecipe);
});

module.exports = router;
