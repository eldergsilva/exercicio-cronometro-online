const express = require('express');
const rotas = express.Router();
const controladores = require('./controlador/cronometro');

rotas.get('/', controladores.raiz);
rotas.get('/iniciar', controladores.iniciarCronometro);
rotas.get('/pausar', controladores.pausarCronometro);
rotas.get('/continuar', controladores.continuarCronometro);
rotas.get('/zerar', controladores.zerarCronometro);

module.exports = rotas;