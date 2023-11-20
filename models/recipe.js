const mongoose = require ('mongoose')
const Schema = mongoose.Schema;

const instructionSchema = new Schema({
    steps:{
        type:[String],
        required: true,
    }
},{timestamps:true})

const recipeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        ingredients:{
            type: [String],
            // required: true,
        },
        steps:[instructionSchema]
    },{timestamps: true}
)

module.exports = mongoose.model('Recipe', recipeSchema)