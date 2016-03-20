var express = require('express');
var router = express.Router();
//var db = require("../db");

var knex = require('knex')({
  client: 'pg',
  connection: {
    user: 'robot',
    password: 'r0b0t!',
    database: 'robots_dev'
  }
});

//require('locus');









/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(process.env.NODE_ENV)
  res.render('index', {
    title: 'Robots App!'
  });
});

router.get('/robots', function (req, res) {


  robots = [
    {id:1, name:"r2d2"},
    {id:2, name:"c3po"},
    {id:3, name:"bb8"},
  ]

  var bbots = []

  response = knex.select('id', 'name').from('robots')
    .then(function(bots){
      //do something here
      console.log(bots);
      bbots.push(bots)
    });

   console.log(bbots)

    // .then(console.log);
    //.asCallback(function(err, rows) {
    //  if (err) return console.error(err);
    //  console.log(rows);
    //});


    //.then(function(rows) {
    //  console.log(rows);
    //})

    //.map(function(row){
    //  return row;
    //})





  //debugger; // requires nodemon to run with --debug flag ... `nodemon --debug ./bin/www`
  //eval(locus);


  res.render('robots/index', {
    title: 'All Robots',
    page_title: 'All Robots',
    robots: bbots
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
