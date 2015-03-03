var mongoose = require('mongoose');
mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL);
var express = require('express');
var races = express.Router();

var RaceSchema = new mongoose.Schema({}, { strict: false });

var Race = mongoose.model('Race', RaceSchema);

races.post('/', function(req, res) {
	var race = new Race(req.body);
	Race.findOneAndUpdate({ _id: race._id }, race, {upsert:true}, function(err, doc) {
		if (err) {
            console.log(err);
            res.send(400, 'Bad Request');
        } else {
			res.json(doc);
        }
	});
});

races.get('/', 
	function(req, res) {
		Race.find({}, function(err, races) {
		    res.json(races);
		});
	}
);

races.get('/:id', 
	function(req, res) {
		console.log(req.params.id);
		Race.findOne({ _id : req.params.id }, function(err, races) {
		    res.json(races);
		});
	}
);

module.exports = races;
