const pgp = require('pg-promise')();
const database = pgp({
    user: '',
    password: '',
    host: 'localhost',
    port: 5432,
    database: ''
})

module.exports = database;
