//Imports
const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();

app.use(cors()); //Permite que o angular acesse a API
app.use(express.json()); //Permite a interpretação de JSON pela aplicação
app.use(router); //Configuração da utilização dos endpoints

//Exports
module.exports = app;