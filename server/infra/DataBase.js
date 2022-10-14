const pgp = require('pg-promise')();

/*Para Docker ##############################
const database = pgp({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE
})
*/

const database = pgp({
    user: 'exiti',
    password: '2r2gexiti',
    host: 'localhost',
    port: '5432',
    database: 'backend'
})

module.exports = database;
