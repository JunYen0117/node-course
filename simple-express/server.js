const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql2');
require('dotenv').config();
let pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    connectionLimit: 10,
})
.promise();



app.get('/stocks', async (req, res, next)=>{
    let[data, fields] = await pool.execute("SELECT * FROM stocks");
    res.json(data);
});

app.get('/stocks/:stockId', async(req, res, nex)=>{
console.log('get stocks by id', req.params);
let [data, fields] = await pool.execute('SELECT * FROM stocks WHERE id =' + req.params.stockId);

console.log('query stock by id:', data);
  // 空資料(查不到資料)有兩種處理方式：
  // 1. 200OK 就回 []
  // 2. 回覆 404
  if (data.length === 0) {
    // 這裡是 404 範例
    res.status(404).json(data);
  } else {
    res.json(data);
  }
});

// app.use((request, response, next) => {
//     console.log('first');
//     next();
// })

// app.use( (request, response, next) => {
//     console.log('second');
//     next();
// })

// app.use((request, response, next) => {
//     console.log('third');
//     response.send('finally');
// })

// app.get('/about', (request, response, next) => {
//     console.log('about');
//     response.send('About Me');
// })


app.listen(3001, ()=>{
    console.log('Server running at port 3001');
});