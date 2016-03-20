# Learning Express

Install node.

Install global packages for command-line access.

```` sh
npm install express-generator -g # enables app-generation CLI
npm install nodemon -g # obviates need to restart dev server every time a file is changed
npm install -g node-inspector # allows you to insert debugging breakpoints
npm install -g knex # enables a database migration CLI
````

Generate a new express application.

```` sh
express robots_app --ejs
cd robots_app/
npm install
````

Create database user.

```` sh
psql
CREATE USER robot WITH ENCRYPTED PASSWORD 'r0b0t!';
ALTER USER robot CREATEDB;
ALTER USER robot WITH SUPERUSER;
\q
````

Create a development database.

```` sh
mkdir db/
touch db/create.sql
````

```` sql
# db/create.sql
DROP DATABASE IF EXISTS robots_dev;
CREATE DATABASE robots_dev;
GRANT ALL PRIVILEGES ON DATABASE robots_dev to robot;
````

```` sh
psql -U robot --password -d postgres -f $(pwd)/db/create.sql
````

Connect to development database.

```` sh
npm install knex --save
npm install pg --save
````

Initialize a new knex app.

```` sh
knex init
````

Change the .knexfile config to use postgresql in development and production.

```` js
// knexfile.js
module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: 'robot',
      password: 'r0b0t!',
      database: 'robots_dev'
    },
    migrations: {
      directory: __dirname+"/db/migrations"
    },
    seeds: {
      directory: __dirname+"/db/seeds"
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname+"/db/migrations"
    },
    seeds: {
      directory: __dirname+"/db/seeds"
    }
  }
};

````

Optionally set the `NODE_ENV` environment variable to "development"; note the default environment for migrations is "development".

Generate a new migration.

```` sh
knex migrate:make create_robots
````

Migrate the database.

```` sh
knex migrate:latest
````

Generate a new database seed file.

```` sh
knex seed:make insert_robots
````

Seed database.

```` sh
knex seed:run
````
