var express = require('express');
var bodyParser = require('body=parser');

var app = express();
var port = process.env.PORT || 3000;


// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));


// test code
app.get('/', function (req, res) { res.status(200).send('Hello world') });
