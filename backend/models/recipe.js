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
        trim: true,
        required: true
    },
    summary: {
        type: String,
        required: false
    },
    ingredient : [{
        "item" : String
         }],
    duration: {
        type: Number,
        min: 0,
        required: true
    },
    directions : [{
        "Passo" : String
    }]
});

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);