var express = require('express');
var router = express.Router();
var recipeCtrl = require('../controller/recipes')

/* GET users listing. */
router.get('/', recipeCtrl.index)

router.get('/new', recipeCtrl.new)



router.get('/:id', recipeCtrl.show)

router.post('/', recipeCtrl.create)



module.exports = router;
