var express = require('express');
var router = express.Router();
var recipeCtrl = require('../controller/recipes')

/* GET users listing. */
router.get('/', recipeCtrl.new)

router.post('/', recipeCtrl.create)



module.exports = router;
