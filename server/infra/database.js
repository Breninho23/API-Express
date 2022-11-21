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

/*Para Local ##############################
const database = pgp({
    user: '',
    password: '',
    host: '',
    port: '',
    database: ''
})
*/

module.exports = database;
