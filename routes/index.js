var express = require('express');
var router = express.Router();

var express = require('express');
var router = express.Router();

module.exports = function(app){
	app.use('/', require('./public'));

	//NOTE: Always put this at the end of the router instance
	router.get('/:subdomain', function(req, res) {
		res.redirect('http://www.ubook.no/');
	});
	app.use('/', router);
};