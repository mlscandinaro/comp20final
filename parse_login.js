var http = require('http');
var url = require('url');
var fs = require('fs');
var save = require('./save_login.js');

http.createServer(function (req, res) {
	

	fs.readFile('./index.html', function (err, html) {
		
	res.writeHead(200, {'Content-Type' : 'text/html'});

		if (err) {
			throw err;
		}

		var qobj = url.parse(req.url, true).query;
		//grabs url and writes name to screen 
		var name = qobj.username;
		var password = qobj.psswd;

		save.connectMongo(name, password);
		    
		res.write("<h2>Welcome " + name + " " + "</h2>");
		res.write(html);
		   
		res.end();
	});
		
	

	
}).listen(8080);