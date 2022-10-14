# Express

[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

Esse projeto consiste em uma API que recebe paramêtros por requisição e salva os mesmos no banco de dados.
O mesmo possui 2 branchs, a master possui duas URL's de requisição separadas enquanto a brach classesLimpas possui apenas uma.
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

## Requisições de Recepção :
BODY para Recepção:

```console
localhost:3000/reception
{
    "receptionattendance": 1  ,
    "receptiontime" : 1,
    "receptionnote" : "1",
    "collectattendante": 1,
    "collecttime" : 1,
    "collectnote" : "1",
    "contact" : "(18) 00000-0000",
    "suggestion" : "",
    "message" : "teste"   
}
```
BODY para Fisioterapia:

```console
localhost:3000/physiotherapy

{
    "physiotherapyattendance" : 1,
    "physiotherapytime": 1,
    "physiotherapynote" : "teste",    
    "contact": "(18) 00000-0000",
    "suggestion" : "",
    "message": "ts"    
}
```

Se tudo der certo será retornado o JSON inserido no banco da aplicação:

```console
 "receptionattendance": 1  ,
    "receptiontime" : 1,
    "receptionnote" : "1",
    "collectattendante": 1,
    "collecttime" : 1,
    "collectnote" : "1",
    "contact" : "(18) 00000-0000",
    "suggestion" : "",
    "message" : "teste"  
```

## Requisições de GET recption ou physiotherapy:
Através dessa requisição você receberá de volta todas as informações cadastradas na tabela do banco como o exemplo abaixo.
```console
    {
        "id": 3,
        "codtype": 2,
        "receptionattendance": null,
        "receptiontime": null,
        "receptionnote": null,
        "collectattendante": null,
        "collecttime": null,
        "collectnote": null,
        "physiotherapyattendance": 1,
        "physiotherapytime": 1,
        "physiotherapynote": "teste",
        "contact": "(18) 00000-0000",
        "suggestion": "",
        "message": "ts"
    },
    {
       "id": 6,
        "codtype": 1,
        "receptionattendance": null,
        "receptiontime": null,
        "receptionnote": null,
        "collectattendante": null,
        "collecttime": null,
        "collectnote": null,
        "physiotherapyattendance": 1,
        "physiotherapytime": 1,
        "physiotherapynote": "teste",
        "contact": "(18) 00000-0000",
        "suggestion": "",
        "message": "ts"
    }
```

## Construir o projeto via docker:
Primeiro vamo montar a imagem do docker, para isso acesse a pasta do projeto via terminal e execute o seguinte comando:
```
docker build . -t projeto/node-web-app
```

Agora você pode executar o comando para iniciar a aplicação via docker, no caso como estou utilizando um banco postgres local eu executo:
```
docker run --network host projeto/node-web-app
```

Caso você esteja executando o banco de dados em uma outra máquina ou container vale a pena dar uma olhada na documentação do docker na área de redes, e
dependendo vale a pena você fazer um arquivo docker-compose.yml, você pode ver mais sobre docker aqui: https://docs.docker.com/







