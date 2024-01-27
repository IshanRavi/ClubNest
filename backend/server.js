const express = require('express');
const { connectMongodb } = require('./database');
const app = express();

connectMongodb();

app.get('/',(req,res)=>{
    res.send("Hello world");
})


app.listen(3000,()=>{
    console.log('listening on port 3000');
})