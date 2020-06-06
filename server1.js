/* global __dirname */

const fs = require('fs');
const http = require('http');

const server = http.createServer((request, response) => {
    let url = request.url;
    if (url === '/') {
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(`${__dirname}/index.html`, 'utf8').pipe(response);
    } else if (url === '/about') {
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(`${__dirname}/about.html`, 'utf8').pipe(response);
    } else if (url === '/contact') {
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(`${__dirname}/contact.html`, 'utf8').pipe(response);
    } else if (url === '/news') {
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(`${__dirname}/news.html`, 'utf8').pipe(response);
    } else {
        response.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(`${__dirname}/404.html`, 'utf8').pipe(response);
    }
});

server.listen(3000, '127.0.0.1');
console.log('Запущен сервер Node.js ...');
