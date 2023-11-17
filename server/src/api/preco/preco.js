import express from 'express'
export const preco = express.Router();

preco.route('/')

    preco.route('/api/preco').post (async function (req, res) {
        console.log('Rota 3');
        const { preco } = req
    });