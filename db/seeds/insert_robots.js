
exports.seed = function(knex, Promise) {
  var robotPromises = [];

  var d = knex('robots').del()
  robotPromises.push(d);

  var robots = [
    {id:1, name:"r2d2"},
    {id:2, name:"c3po"},
    {id:3, name:"bb8"},
  ]

  robots.forEach(function(robot){
    var p = knex('robots').insert({
      id: robot["id"],
      name: robot["name"]
    })
    robotPromises.push(p);
  });

  return Promise.all(robotPromises);

};
