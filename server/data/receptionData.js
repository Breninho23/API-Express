//Aqui fica as interações com o banco
const database = require('../infra/database');

exports.getReceptions = function (){
    return database.query('select * from post.post');
}

exports.insertReception = function (data2){    
    return database.none('INSERT INTO post.post (receptionattendance, receptiontime, receptionnote, collectattendante, collecttime, collectnote, physiotherapyattendance, physiotherapytime, physiotherapynote) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)'
        , [data2.receptionattendance ,data2.receptiontime, data2.receptionnote, data2.collectattendante, data2.collecttime, data2.collectnote, data2.physiotherapyattendance, data2.physiotherapytime, data2.physiotherapynote])
    .then(() => {
        return data2;        
    })
    .catch(error => {
        return error;             
    });   
}