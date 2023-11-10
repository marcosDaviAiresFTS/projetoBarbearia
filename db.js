const { Pool } = require("pg");

const pool = new Pool ({
    user: 'jhonysilva',
    host: 'localhost',
    database: 'Barbearia',
    password: 'jhonysilva008',
    port: 5432
});


module.exports = pool;