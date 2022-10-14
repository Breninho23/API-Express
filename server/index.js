const express = require('express');
const app = express();

//Rodar sem docker é só substituir:
//process.env.PORT 
//pela porta que você quer
const port = 3000;
app.use(express.json())
app.use('/', require('./route/Route'));
app.listen(port)
console.log(`Aplicação inicada na porta ${port}`);

//Middleware nada mais é que um conversor da informação para JSON
//req nada mais é do que a pergunta do servidor ou a requisição
// res é a resposta do servidor

