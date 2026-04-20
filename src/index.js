const express = require('express')
const rotas =require('./rotas')
const app= express();
 
app.get('/iniciar',rotas.iniciarCronometro)
app.get('/zerar',rotas.iniciarCronometro)

app.listen(8000);
console.log('Servidor no ar ');

