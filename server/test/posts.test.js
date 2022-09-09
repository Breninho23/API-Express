const axios = require ('axios');

test('Should get posts', async function (){
    const responde = await axios({
        url: 'http://localhost:3000/posts',
        method: 'get'
    })
});
const posts = responde.data;