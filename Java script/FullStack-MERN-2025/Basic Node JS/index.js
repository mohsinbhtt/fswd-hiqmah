const fs = require('fs');
const http = require('http');

const server = http
	.createServer((req, res) => {
		if (req.url == '/') {
			//display index.html
			fs.readFile('./views/index.html', 'utf-8', (err, data) => {
				if (err) {
					res.writeHead(500, { 'content-type': 'text/html' });
					res.write(`<h1> Server Error</h1>`);
					res.end();
				} else {
					res.writeHead(500, { 'content-type': 'text/html' });
					res.write(data);
					res.end();
				}
			});
		} else if (req.url == '/about') {
			// display about.html
			fs.readFile('./views/about.html', 'utf-8', (err, data) => {
				if (err) {
					res.writeHead(500, { 'content-type': 'text/html' });
					res.write(`<h1> Server Error</h1>`);
					res.end();
				} else {
					res.writeHead(500, { 'content-type': 'text/html' });
					res.write(data);
					res.end();
				}
			});
		} else {
			//display 404.html
			fs.readFile('./views/404.html', 'utf-8', (err, data) => {
				if (err) {
					res.writeHead(500, { 'content-type': 'text/html' });
					res.write(`<h1>Page Not Found</h1>`);
					res.end();
				} else {
					res.writeHead(200, { 'content-type': 'text/html' });
					res.write(data);
					res.end();
				}
			});
		}
	})
	.listen(3600);
