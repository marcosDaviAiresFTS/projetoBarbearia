import express from 'express'
import { pool } from '../../db'
export const agendamento = express.Router();

agendamento.route('/')
    
    .get