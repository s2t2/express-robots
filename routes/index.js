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
}); // todo: read this from config file.


/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(process.env.NODE_ENV)
  res.render('index', {
    title: 'Robots App!'
  });
});

router.get('/robots', function (req, res) {
  response = knex.select('id', 'name').from('robots').then(function(bots){
    res.render('robots/index', {
      title: 'All Robots',
      page_title: 'All Robots',
      robots: bots
    }); // res.render
  }); // knex.select
}); // router.get

router.get('/robots/new', function (req, res) {
  res.render('robots/new', {
    title: 'Add a New Robot',
    page_title: 'Add a New Robot'
  });
});

router.post('/robots/new', function (req, res) {
  robot_name = req.body.robot_name
  console.log('Robot name: ' + robot_name);

  //knex('robots').where('name', robot_name).update({
  //  updated_at: knex.raw('now()')
  //}).then(function(bot){
  //  req.flash('info', 'Created robot named '+robot_name );
  //  req.flash('info', 'Created robot named '+bot );
  //  res.redirect('/robots')
  //})

  knex('robots').insert([{'name': robot_name}], 'id').then(function(bot_id){ // , 'id' facilitates the auto-incrementing and avoids error... Unhandled rejection error: insert into "robots" ("name") values ($1) - duplicate key value violates unique constraint "robots_pkey"
    console.log(bot_id)
    req.flash('info', 'Created robot named '+robot_name );
    res.redirect('/robots')
  })
});

module.exports = router;
