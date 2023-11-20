const Recipe = require ('../models/recipe')

module.exports = {
  new: newRecipe,
  create,
};

function newRecipe(req, res) {
  res.render("new");
  //res.send('new')
}

async function create(req, res) {
    try{
        const newRecipe = await Recipe.create(req.body);
        res.redirect('/recipe/index', {title: "Add Recipe", newRecipe})

    }catch(err){
        console.log(err)

    }

  res.redirect('/')
//   res.send("create");
}
