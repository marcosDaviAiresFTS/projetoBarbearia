import express from 'express'
export const authRouter = express.Router();
import {pool} from '../../db.js'

authRouter.route('/')

    .post(async (req, res) => {
        console.log('Rota 1');
        const { login, senha } = req.body;
        try {
            const result = await pool.query('SELECT * FROM usuarios WHERE login = $1 AND senha = $2', [login, senha]);

            if (result.rows.length > 0) {
                res.json ({message: 'Login efetuado com sucesso!'});
            }  else {
                res.status(500).json ({message: 'Ocorreu um erro interno no servidor, tente novamente.'});
            }
        } catch (error) {
            console.error ('Erro de autenticação', error)
            res.status (500).json ({message: 'Erro interno no servidor'})
        }
    })
    authRouter.route('/criar-conta').post( async function (req, res) {
        console.log('Rota 2');
        const { login, senha} = req.body

        try {
            const result = await pool.query('INSERT INTO usuarios (login, senha) VALUES ($1, $2) RETURNING *', [login, senha]);
            res.json ({message: 'Conta criada com sucesso!'})
        } catch (error) {
            console.error ('Ocorreu ao criar a conta.', error)
            res.status(500).json ({message: 'Erro interno no servidor'});
        }
    })

