const express = require('express');
const app = express();

app.get('/', (request, response, next) => {
    response.send('首頁');
})

app.get('/about', (request, response, next) => {
    response.send('About Me');
})


app.listen(3001, ()=>{
    console.log('Server running at port 3001');
});