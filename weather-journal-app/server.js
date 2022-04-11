// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Set port
const port = 8000;
// Setup Server
const server = app.listen(port , ()=>{console.log(`running on local host : ${port}` );});

// Get route
app.get("/all",getFunc);

function getFunc(req,res){
    res.send(projectData);
}
// Post route
app.post("/add",callback);

function callback(req,res){
    res.send('Post received');
}
// Post a weather 
app.post("/weather",addWeather);

function addWeather(req,res){

    const weatherInfo = {
        temperature:req.body.temperature,
        date:req.body.date,
        feelings:req.body.feelings
    }
    projectData.push(weatherInfo);
    console.log(projectData);
}