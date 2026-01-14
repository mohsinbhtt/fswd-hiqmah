const http = require('http');
const fs = require('fs');
fs.readFile('./text.js', 'UTF-8', (err, data) => {
	console.log(data);
});

fs.readFile('./DATA/product.json', 'utf-8', (err, data2) => {
	console.log(data2);
});

const server = http.createServer((req, res) => {
	res.end('abc abc');
});

server.listen(3000, () => {
	console.log('server started from port 3500');
});
