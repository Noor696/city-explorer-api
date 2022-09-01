require('dotenv').config(); //import dotenv to but secret value in (.env) folder
const express = require('express'); //import express framework
const cors = require('cors'); //import cors use to deny or allow any client to send me the request as a server
const server = express(); 
const getWeatherDataFunction  = require('./weather'); // this line to push data inside the server
const PORT = process.env.PORT; //herocu put own Num. ,, and heroco use the port var. as a Capital word (PORT)

server.use(cors()); //
 

// local IP address
// port

// Global route (always upper one)
//http:localhost:PORT/
//ex: www.google.com (home route)
server.get('/',(req,res)=>{
    res.send("Hi from the home route");
})



  //http:localhost:PORT/route
server.get('/route',(req,res)=>{
    res.send("Hi from the my route");
})
//https://city-explorer-noor.herokuapp.com/
//http:localhost:PORT/weatherData?lon=lon&lat=lat
server.get('/weatherData',getWeatherDataFunction);


res.send(result); //this line to send response from the server to react

// default route : if user input arror route
server.get("*", (req,res)=>{
    res.send("page not found");
})

server.listen(PORT, () => {
    console.log(`Hello, I am listening on ${PORT}`);
})