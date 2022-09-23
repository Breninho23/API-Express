//Aqui ficam as regras de negócio
const postsData = require ('../data/postsData');

exports.getEvaluations = function (){
    return postsData.getEvaluations();
};

exports.postEvaluations = function (data){
    return postsData.insertEvaluations(data);
};