// Basic HTTP server using the built-in http module
const http = require('http');
const { log } = require('./modules/logger');

const PORT = process.argv[2] || 3000;

const routes = {
  '/': 'Welcome to Node Server',
  '/about': 'About Page',
  '/contact': 'Contact Page',
};

const server = http.createServer((req, res) => {
  log(`${req.method} ${req.url}`, 'INFO');

  const body = routes[req.url];

  if (body) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(body);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Page Not Found');
  }
});

server.listen(PORT, () => {
  log(`Server running at http://localhost:${PORT}/`, 'SUCCESS');
});
