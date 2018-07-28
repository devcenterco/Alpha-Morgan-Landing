const express = require('express');
const path = require('path');

const app = express();
const port = 8441;
const rootDir = path.join(__dirname, '/');

app.use(express.static(rootDir));
// app.use('*', express.static(path.join(__dirname, '/')));

app.get('/about',function(req, res) {
  res.sendFile('about.html', { root: rootDir });
});

app.get('/faq',function(req, res) {
  res.sendFile('faq.html', { root: rootDir });
});

app.use('*',function(req, res) {
  res.sendFile('index.html', { root: rootDir });
});

app.listen(port);

console.log(`Running on http://localhost:${port}`);
