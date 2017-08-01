var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next){
  res.render('user', {name:''});
});


router.get('/:username', function(req, res, next) {
  res.render('user', {name : req.params.username});
});

module.exports = router;
