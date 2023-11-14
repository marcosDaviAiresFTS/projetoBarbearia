const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;
const db = require('./db.js');

app.use(bodyParser.json());


app.post('/login', async (req, res) => {
    const { login, senha } = req.body;
    try {
        const result = await pool.query('SELECT * FROM USERS WHERE login $1 AND senha = $2', [login, senha]);

        if (result.rows.length > 0) {
            res.json ({message: 'Login efetuado com sucesso'});
        }
    }
});