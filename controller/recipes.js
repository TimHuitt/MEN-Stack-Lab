module.exports = {
    new: newRecipe,
    create
}

function newRecipe(req, res){
    // res.render('new')
    res.send('new')
}

function create(req, res){
    // res.redirect('/')
    res.send('create')
}