const pgp = require('pg-promise')();
const database = pgp({
    user: 'exiti',
    password: '2r2gexiti',
    host: 'localhost',
    port: 5432,
    database: 'backend'
})

module.exports = database;