//Aqui ficam as regras de negócio
const postsData = require ('../data/postsData');

exports.getPosts = function (){
    return postsData.getPosts();
};

exports.postPosts = function (data){
    return postsData.insertPosts(data);
};