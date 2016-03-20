# Robots App

## Prerequisites

Install node and npm.

Install postgresql.

Install source code.

```` sh
git clone git@github.com:s2t2/express-robots.git
cd express-robots/
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

Create database.

```` sh
psql -U robot --password -d postgres -f $(pwd)/db/create.sql
````

Migrate database.

```` sh
knex migrate:latest
````

Seed the database.

```` sh
knex seed:run
````

## Usage

Start the server and visit localhost:3000 in a browser.

```` sh
DEBUG=robots_app:* npm start
````
