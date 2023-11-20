var express = require('express');
var router = express.Router();
var recipeCtrl = require('../controller/recipes')

/* GET users listing. */
router.get('/new', recipeCtrl.new)

router.get('/', recipeCtrl.index)

router.post('/', recipeCtrl.create)



module.exports = router;
