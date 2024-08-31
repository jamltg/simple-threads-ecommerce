const express = require('express');
const app = express();

const pool = require('./config/db');
const mockProduct = require('./mockData/mockProducts');

app.get('/products',(req,res)=>{
  try{
    res.status(200).json(mockProduct);
  }catch(err){
    res.status(500).send('Database Error')
  }
})

app.listen(8080, ()=>{
  console.log('Port 8080 is listening');
})