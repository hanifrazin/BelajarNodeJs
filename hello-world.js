"use strict"

/**
 * Sumber : https://nodejs.org/dist/latest-v14.x/docs/api/synopsis.html#synopsis_usage
 */

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});