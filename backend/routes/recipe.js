const router = require("express").Router();
const { publicPosts, privatePosts, uniqueRecipe } = require("../database");
const authToken = require("../middleware/authenticateToken");

const Recipe = require('../models/recipe');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()

/*
router.get("/public", (req, res) => {
  res.json(publicPosts);
});*/

router.get("/", authToken, (req, res) => {
  res.send("AAAAAAAAAAA");
});

router.get("/private", authToken, (req, res) => {
  res.json(privatePosts);
});
/*
router.get("/test", authToken, (req, res) => {
  console.log(req.query.id)
  res.json(uniqueRecipe);
});*/

//recipe by id
router.get("/id", authToken , (req, res, next) => {
  try {
    console.log(req.query.recipe_id)
    Recipe.find({ recipe_id: req.query.recipe_id }).then(recipe => {//search recipe by id in mongodb
      if (recipe.length > 0) {//If not empty, found a document to return
        res.status(200)
        res.json(recipe)
      }
      else {//No document was found
        res.status(404)
        res.json({ message: 'recipe not found' })
      }
      return next()
    })
  } catch (error) {
    res.status(400)
    res.json({ message: error })
  }
})
  

module.exports = router;
