const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;
const db = require('./db.js')

app.use(bodyParser.json());


app.post('/login', async (req, res) => {
    const { login, senha } = req.body;
}) 