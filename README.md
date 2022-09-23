# Express

[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

Ese projeto consiste em uma API que recebe paramêtros por requisição e salva os mesmos no banco de dados.

```index.js
const express = require('express');
const app = express();

const PORT = 3000;
app.use('/', require('./route/postsRoute'));

app.listen(PORT)
console.log(`Aplicação inicada na porta ${PORT}`);
```

## Instalação

Para fazer a instalação do projeto é necessário o [Node.js](https://nodejs.org/en/) esse módulo está disponível através [npm](https://www.npmjs.com/), 
após a instalação do Node.Js e clonagem do projeto você pode executar:

```console
$ npm install express
```

Isso ira instalar todas as dependências listadas no arquivo package.gson


## Criação do banco de Dados

Como banco de dados para essa aplicação foi utilizado o postgres, caso já tenha instalado você pode apenas abrir o arquivo creat.sql localizado na pasta
Database eexecutar o script no seu banco para a criação do schema e das tabelas, após isso você ira alterar o arquivo postData.js e substituir as 
credências de acesso para as do seu banco de dados.

## Iniciar o projeto

Para poder iniciar o projeto basta executar:

```console
$ node server
```
Após a iniciação do projeto você pode entrar no : http://localhost:3000


## Teste de requisição:

No caso eu utilizei o Postman mas você pode utilizar qualquer outra aplicação para testar as requisições passando os seguintes parametros:

## Requisições de POST :
```console
localhost:3000/posts
```
HEADER:

```console
receptionattendance
receptiontime
receptionnote
collectattendante
collecttime
collectnote
physiotherapyattendance
physiotherapytime
physiotherapynote
```
Se tudo der certo será impresso no console da aplicação:

```console
Cadastrado com sucesso
```

## Requisições de GET :
```console
localhost:3000/posts
```
Através dessa requisição você receberá de volta todas as informações cadastradas na tabela do banco como o exemplo abaixo.
```console
[
    {
        "id": 1,
        "receptionattendance": 1,
        "receptiontime": 1,
        "receptionnote": "primeiro",
        "collectattendante": 1,
        "collecttime": 1,
        "collectnote": "primeiro",
        "physiotherapyattendance": 1,
        "physiotherapytime": 1,
        "physiotherapynote": "primeiro"
    },
    {
        "id": 2,
        "receptionattendance": 2,
        "receptiontime": 2,
        "receptionnote": "segundo",
        "collectattendante": 2,
        "collecttime": 2,
        "collectnote": "segundo",
        "physiotherapyattendance": 2,
        "physiotherapytime": 2,
        "physiotherapynote": "segundo"
    }
]
```







