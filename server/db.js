const { Pool } = require("pg");

const pool = new Pool ({
    user: 'barbearia.proj',
    host: 'localhost',
    database: 'Barbearia',
    password: 'barbearia',
    port: 5432
});


module.exports = pool;
