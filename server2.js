/* global __dirname */

const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.sendFile(`${__dirname}/index.html`);
});

app.get('/about', (request, response) => {
    response.sendFile(`${__dirname}/about.html`);
});

app.get('/contact', (request, response) => {
    response.sendFile(`${__dirname}/contact.html`);
});

app.get('/news', (request, response) => {
    response.sendFile(`${__dirname}/news.html`);
});

app.get('/details/:id', (request, response) => {
    response.render('details', {post_id: request.params.id});
});

app.listen(3000);
console.log('Запущен локальный сервер Node.js / порт: 3000');
