// Setup empty JS object to act as endpoint for all routes
let projectData = {};

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
const port = 4000;
// Setup Server
const server = app.listen(port , ()=>{console.log(`running on local host at http://localhost:${port}`)});

// Get route
app.get("/getData",getFunc);

function getFunc(req,res){
    res.send(projectData);
}
// Post route
app.post("/sendData",callback);

function callback(req,res){
    projectData = req.body;
    res.send(projectData);
}
