//Aqui ficam as regras de negócio
const receptionData = require ('../data/receptionData');

exports.getReception = function (){
    return receptionData.getReceptions();
};

exports.postReception = function (data){
    return receptionData.insertReception(data);
};