var express = require('express');
var router = express.Router();
var recipeCtrl = require('../controller/recipes');
const recipe = require('../models/recipe');

/* GET users listing. */
router.get('/', recipeCtrl.index)

router.get('/new', recipeCtrl.new)

router.get('/:id', recipeCtrl.show)

router.post('/', recipeCtrl.create)

router.delete('/:id', recipeCtrl.delete)

router.get('/:id/edit', recipeCtrl.edit)



module.exports = router;