'use strict';

// simple express server
var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static('public'));
app.get('/', function(req, res) {
    res.sendfile('./public/index.html');
});

app.listen(process.env.PORT || 8080 ,function(){
    console.log("up and running on port "+ process.env.PORT);
});
