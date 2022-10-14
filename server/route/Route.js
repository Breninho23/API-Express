//Aqui ficam as rotas
const express = require ('express')
const Router = express.Router();
const Service = require ('../service/Service');

Router.get('/', async function (req, res){   
    let posts = [{}] 
    let type = req.query.type;    
    if(type){
        posts = await Service.get(type);   
    }
    res.json(posts);
});

Router.post('/', async function (req, res){ 
        const values = req.body       
        const posts = await Service.post(values);                      
        res.json(posts);
});


//Fazer isso me da a possibilidade de distribuir as rotas em arquivos diferentes
module.exports = Router;