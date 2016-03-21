
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("robots", function (table) {
      table.increments(); // auto-incrementing integer id
      table.string("name").notNullable().unique();

      //table.timestamps(); // creates created_at and updated_at but with no logic ...
      table.timestamp("created_at").defaultTo(knex.raw('now()')).notNullable();
      table.timestamp("updated_at").defaultTo(knex.raw('now()')).notNullable();
    }) // create robots table
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("robots")
  ]);
};
