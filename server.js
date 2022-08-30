const express = require('express'); //import express framework
const cors = require('cors'); //import cors library
const server = express(); 
require('dotenv').config(); //import dotenv library
const weatherData = require('./data/weather.json');
// local IP address
// port

// Global route (always upper one)
//http:localhost:PORT/
//ex: www.google.com (home route)
server.get('/',(req,res)=>{
    res.send("Hi from the home route");
})

const PORT = 3000

  //http:localhost:PORT/route
server.get('/route',(req,res)=>{
    res.send("Hi from the my route");
})

//http:localhost:PORT/getweather
server.get('/getweather',(req,res)=>{
    
});

server.listen(PORT, () => {
    console.log(`Hello, I am listening on ${PORT}`);
})