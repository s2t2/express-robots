var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(process.env.NODE_ENV)
  res.render('index', {
    title: 'Robots App!'
  });
});

router.get('/robots', function (req, res) {
  res.render('robots/index', {
    title: 'All Robots',
    page_title: 'All Robots',
    robots: [
      {id:1, name:"r2d2"},
      {id:2, name:"c3po"},
      {id:3, name:"bb8"},
    ]
  });
});

router.get('/robots/new', function (req, res) {
  res.render('robots/new', {
    title: 'Add a New Robot',
    page_title: 'Add a New Robot'
  });
});

router.post('/robots/new', function (req, res) {
  console.log('Robot name: ' + req.body.robot_name);
  res.redirect('/robots');
});

module.exports = router;
