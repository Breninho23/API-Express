//Aqui ficam as regras de negócio
const physiotherapyData = require ('../data/physiotherapyData');

exports.getPhysiotherapy = function (){
    return physiotherapyData.getPhysiotherapy();
};

exports.postPhysiotherapy = function (data){
    return physiotherapyData.insertPhysiotherapy(data);
};