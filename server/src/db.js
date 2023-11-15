import pkg from 'pg'
const { Pool } = pkg

export const pool = new Pool ({
    user: 'barbearia',
    host: 'localhost',
    database: 'Barbearia',
    password: 'barbearia',
    port: 5432
});



