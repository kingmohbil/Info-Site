const http = require('http'); // requiring https module
const fs = require('fs'); // require files system module

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.write(data);
      res.end();
    });
  } else if (req.url == '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.write(data);
      res.end();
    });
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('contact-me.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.write(data);
      res.end();
    });
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('about.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('404.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8080);
console.log('Server is listning to port 8080...');
