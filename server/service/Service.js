//Aqui ficam as regras de negócio
const Data = require ('../data/Data');

exports.get = function (type){
    return Data.get(type);
};

exports.post = function (data){
    return Data.post(data);
};