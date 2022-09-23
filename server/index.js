const express = require('express');
const app = express();

const PORT = 3000;
app.use(express.json())
app.use('/', require('./route/postsRoute'));

app.listen(PORT)
console.log(`Aplicação inicada na porta ${PORT}`);
//Middleware nada mais é que um conversor da informação para JSON


//req nada mais é do que a pergunta do servidor ou a requisição
// res é a resposta do servidor

