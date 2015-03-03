var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tuloslaskenta');
var express = require('express');
var http = require('http');
var lines = express.Router();

var CompetitionSchema = new mongoose.Schema({}, { strict: false });

var Competition = mongoose.model('Competition', CompetitionSchema);

lines.post('/', function(req, res) {
	console.log(JSON.stringify(req.body));
	var competition = new Competition(req.body);
	competition.save();
	res.end();
});

lines.get('/', 

	function(req, res2) {
		Competition.find({}).sort('-_id').limit(1).exec(function(err, doc) {
		    res2.write(JSON.stringify(doc));
		    res2.end();
		}).on("error", function(e) {
			  console.log("Error: ", e);
		});
	}

);

module.exports = lines;
