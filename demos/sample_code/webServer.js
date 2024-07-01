// importiere alle benötigten Module für einen Webserver mit express
// und erstelle eine neue Instanz von express
// use multiple steps to create a web server with express
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

// erstelle eine neue Instanz von express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// erstelle einen neuen Webserver und höre auf Port 8080
app.listen(8080, function(){
    console.log('Server running at http://
