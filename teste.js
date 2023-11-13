const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const pool = new Pool({
    user: 'jhonysilva',
    host: 'localhost',
    database: 'Barbearia',
    password: 'jhonysilva008',
    port: 5432,
});


app.post('/login', async (req, res) => {
    const { login, senha } = req.body;

    try {
        const result = await pool.query('SELECT * FROM users WHERE login = $1 AND senha = $2', [login, senha]);

        if (result.rows.length > 0) {
            res.json({ message: 'Login bem-sucedido!' });
        } else {
            res.status(401).json({ message: 'Credenciais inválidas. Tente novamente.' });
        }
    } catch (error) {
        console.error('Erro durante a autenticação:', error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
});

app.post('/signup', async (req, res) => {
    const { login, senha } = req.body;

    try {
        const result = await pool.query('INSERT INTO users (login, senha) VALUES ($1, $2) RETURNING *', [login, senha]);

        res.json({ message: 'Conta criada com sucesso!' });
    } catch (error) {
        console.error('Erro durante a criação da conta:', error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
