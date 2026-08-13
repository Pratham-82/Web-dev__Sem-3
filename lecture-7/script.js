const http = require('http');

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Bob Johnson' }
];

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("<h1>Welcome to the Home Page</h1>");
    res.end();
  }else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("<h1>Welcome to the About Page</h1>");
    res.end();
  }else if (req.url === '/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(users));
    res.end();
  }
  else if(req.method=="POST" && req.url=="/users"){
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', () => {
      const newUser = JSON.parse(body);
      users.push(newUser);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify(newUser));
      res.end();
    });
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write("<h1>404 Not Found</h1>");
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
})