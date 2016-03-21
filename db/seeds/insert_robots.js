
exports.seed = function(knex, Promise) {
  var robots = [{name:"r2d2"}, {name:"c3po"}, {name:"bb8"}]

  var robotPromises = [];

  // destroy all records in the table...
  var destruction_promise = knex('robots').del()
  robotPromises.push(destruction_promise);

  // add a new record for each robot...
  var insertion_promise = knex('robots').insert(
    robots, 'id' // auto-increment the id instead of setting it
  )
  robotPromises.push(insertion_promise);

  return Promise.all(robotPromises);
};
