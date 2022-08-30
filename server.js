const express = require('express'); //import express framework
const cors = require('cors'); //import cors library
const server = express(); 
require('dotenv').config(); //import dotenv library

// local IP address
// port

// Global route
//http:localhost:PORT/
//ex: www.google.com (home page)
server.get('/',(req,res)=>{
    res.send("Hi from the home route");
})

const PORT = 3000

  //http:localhost:PORT/route
server.get('/route',(req,res)=>{
    res.send("Hi from the my route");
})

server.listen(PORT, () => {
    console.log(`Hello, I am listening on ${PORT}`);
})