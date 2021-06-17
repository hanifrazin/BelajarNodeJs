"use strict"

const { NOTFOUND } = require('dns');
const http = require('http');
const data = [];
const qs = require('querystring');

const server = http.createServer((req,res) => {
    if('/' == req.url){
        switch(req.method){
            case 'GET':
                tampilkanForm(res);
                break;
            case 'POST':
                prosesData(req,res);
                break;
            default:
                badRequest(res);
        }
    }else{
        notFound(res);
    }
});

const tampilkanForm = (res) => {
    const html = 
    `<html>
        <head>
            <title>Data Hobiku</title>
        </head>
        <body>
            <h1>Hobiku</h1>
            <form method="post" action="/">
                <p><input type="text" name="hobi"></p>
                <p><input type="submit" value="Simpan"></p>
            </form>
        </body>
    </html`;

    res.setHeader('Content-Type','text/html');
    res.setHeader('Content-Length',Buffer.byteLength(html));
    res.end(html);
};

const prosesData = (req, res) => {
    let body = '';
    req.setEncoding('utf-8');
    req.on('data', (chunk) => {
        body += chunk;
    });

    req.on('end', () => {
        const data = qs.parse(body);
        res.setHeader('Content-Type','text/plain');
        res.end(`Hobiku : ${data.hobi}`);
    });
};

const badRequest = (res) => {
    res.statusCode = 400;
    res.setHeader('Content-Type','text/plain');
    res.end('400 - Bad Request');
};

const notFound = (res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type','text/plain');
    res.end('404 - Not Found');
};

server.listen(3003);
console.log('server http berjalan pada port 3003');