const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    recipe_id: {
        type: Number,
        min: 0,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: false
    },
    ingredient: {
        type: String,
        required: false
    },
    duration: {
        type: Number,
        min: 0,
        required: true
    },
    directions: {
        type: String,
        required: true
    }
});

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);