const express = require('express');
const app = express();

app.use('/', require('./route/postsRoute'));

app.listen(3000)
//middleware
//Middleware nada mais é que um conversor da informação para JSON


//req nada mais é do que a pergunta do servidor ou a requisição
// res é a resposta do servidor

