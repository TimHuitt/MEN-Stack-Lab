const Recipe = require ('../models/recipe')

module.exports = {
  new: newRecipe,
  create,
  index,
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
        
        res.redirect('/recipes/index')

    }catch(err){
        console.log(err)

    }

//   res.redirect('/')
//   res.send("create");
}
