const express = require('express');
const app = express();

const pool = require('./config/db');

app.get('/products', async (req,res)=>{
  try{
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  }catch(err){
    res.status(500).send('Database Error')
  }
})

app.listen(8080, ()=>{
  console.log('Port 8080 is listening');
})