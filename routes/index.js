var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Robots App!'
  });
});

router.get('/robots', function (req, res) {
  res.render('robots', {
    title: 'All Robots'
  });
});

router.get('/robots/new', function (req, res) {
  res.render('robots/new', {
    title: 'Add a New Robot'
  });
});

module.exports = router;
