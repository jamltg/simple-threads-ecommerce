const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const pool = require('./config/db');

//Men's products
app.get('/api/products', async (req,res)=>{
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