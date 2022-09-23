//Aqui ficam as rotas
const express = require ('express')
const router = express.Router();
const PostsService = require ('../service/postsService');

router.get('/evaluations', async function (req, res){
    const posts = await PostsService.getEvaluations();
    res.json(posts);
});

router.post('/evaluations', async function (req, res){ 
        const values = req.body
        const posts = await PostsService.postEvaluations(values);        
        res.json(posts);
});

//Coisas que talvez eu use mas depois
/*
router.get('posts/:id', async function (req, res){});
router.put('posts/:id', async function (req, res){});
router.delete('posts/:id', async function (req, res){});
*/


//Fazer isso me da a possibilidade de distribuir as rotas em arquivos diferentes
module.exports = router;