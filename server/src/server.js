import bodyParser from 'body-parser';
import express from 'express'
const app = express();
const port = 3000;
import { pool } from './db.js'
import { authRouter } from './api/auth/auth.js';  

app.use(bodyParser.json());

app.use('/api/auth', authRouter)

app.use(express.static('client'))

app.listen(port, function () {
    console.log('App rodando na porta', port);
})
