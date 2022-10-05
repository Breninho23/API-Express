//Aqui ficam as rotas
const express = require ('express')
const router = express.Router();
const ReceptionService = require ('../service/receptionService');

router.get('/reception', async function (req, res){
    const posts = await ReceptionService.getReception();
    res.json(posts);
});

router.post('/reception', async function (req, res){ 
        const values = req.body
        const posts = await ReceptionService.postReception(values);        
        res.json(posts);
});

router.get('/teste', async function (req, res){ 
    console.log("teste");
    res.end();
});

//Coisas que talvez eu use mas depois
/*
router.get('posts/:id', async function (req, res){});
router.put('posts/:id', async function (req, res){});
router.delete('posts/:id', async function (req, res){});
*/


//Fazer isso me da a possibilidade de distribuir as rotas em arquivos diferentes
module.exports = router;