
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
