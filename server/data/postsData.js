const database = require('../infra/database');

exports.getPosts = function (){
    return database.query('select * from post.post');
}

exports.insertPosts = function (data2){    
    database.none('INSERT INTO post.post (receptionattendance, receptiontime, receptionnote, collectattendante, collecttime, collectnote, physiotherapyattendance, physiotherapytime, physiotherapynote) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)', [data2.receptionattendance ,data2.receptiontime, data2.receptionnote, 2, 2, 'segundo', 2, 2, 'segundo'])
    .then(() => {
        console.log("Cadastrado com sucesso")
    })
    .catch(error => {
        console.log('Error:', error);
    });   
}