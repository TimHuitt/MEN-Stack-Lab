const Recipe = require ('../models/recipe')

module.exports = {
  new: newRecipe,
  create,
  index,
  show
};

async function index(req, res) {
    
    try {
        const recipes = await Recipe.find()
        
        res.render('recipes/index', {title: "All Recipes", recipes})
    } catch (err) {
        console.log(err)
    }

}

function newRecipe(req, res) {
  res.render("recipes/new");
  //res.send('new')
}

async function create(req, res) {
    try{
        const newRecipe = await Recipe.create(req.body);
        console.log(newRecipe)
        console.log(req.body)
        res.redirect('/recipes')

    }catch(err){
        console.log(err)

    }
}

async function show(req, res) {
try {
    const recipe = await Recipe.findById(req.params.id)
    res.render('recipes/show', {
        title: 'Recipe',
        recipe
    })
} catch (err){
    console.log(err)
}

}
