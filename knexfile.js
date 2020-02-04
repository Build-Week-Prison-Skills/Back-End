// Update with your config settings.
const dbConnection = process.env.DATABASE_URL; 

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/prisoninfo.db3'
    },
    useNullAsDefault: true,
   
    migrations: {
      tableName: "knex_migrations",
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3',
    },
    useNullAsDefault: true,
  
  production: {
    client: 'postgresql',
    connection: dbConnection,
    migrations: {
      tableName: "knex_migrations",
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    }
  }
}
};
