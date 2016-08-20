/*jslint node: true */

'use strict';
var express = require('express');
var parser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

// Client side code
app.use('/', express.static('client/'));

// API
// var routes = require('./routes/index');
// app.use('/api', routes);

app.listen(3000, function() {
	console.log('Service on running on 3000');
});