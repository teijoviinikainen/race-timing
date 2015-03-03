var config = require('./config');
var races = require('./routes/races');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var serveStatic = require('serve-static');
//app.use(serveStatic('deps', {}));
app.use(serveStatic('public', {'index': ['index.html']}));

app.get('/api/config', function(req, res) {
	res.send('var config = ' + JSON.stringify(config));
});

app.use('/api/races', races);

server.listen(config.serverport, config.serverip, function() {
	io.on('connection', function (socket) {
		setInterval(function () {
			socket.emit('news', { hello: Date.now() });
		}, 1000);
	});
});
