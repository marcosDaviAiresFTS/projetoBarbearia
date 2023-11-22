import bodyParser from 'body-parser';
import express from 'express'
const app = express();
const port = 3000;
import { pool } from './db.js'
import { authRouter } from './api/auth/auth.js';  
import { agendamento } from './api/agendamento/agendamento.js';

app.use(bodyParser.json());

<<<<<<< HEAD
app.use('/api/auth', authRouter);
app.use('/api/agendamento', agendamento);
=======
app.use('/api/auth', authRouter)
>>>>>>> dd8472eee40856d7b7bdfae67c98e928dc0e114d
app.use(express.static('client'))

app.listen(port, function () {
    console.log('App rodando na porta', port);
})
