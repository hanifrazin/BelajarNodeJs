const http = require('http');
const parse = require('url').parse;
const join = require('path').join;
const fs = require('fs');

/**
 * __dirname merupakan variabel global yang disediakan oleh Node.js yang berisi path direktori 
 * dari file yang sedang aktif mengeksekusi __dirname
 * 
 * root merupakan direktori root atau referensi tempat dimana file-file yang akan dikirimkan oleh 
 * server Node.js. Pada kode server diatas direktori root di setting pada direktori www
 * 
 * path adalah path file yang bisa didapatkan dengan menggabungkan path direktori root dan pathname
 * 
 * Sumber : https://idjs.github.io/belajar-nodejs/server_file_statis/index.html
 */
const root = join(__dirname,'www');
const PORT = 3400;

const server = http.createServer((req,res) => {
    const url = parse(req.url);
    const path = join(root, url.pathname);
    const stream = fs.createReadStream(path);

    stream.on('data',(bagian) => {
        res.write(bagian);
    });

    stream.on('end',() => {
        res.end();
    });

    stream.on('error',() => {
        res.setHeader('Content-Type','text/html');
        const url_demo = `http://localhost:${PORT}/index.html`;
        res.write(`coba buka <a href=${url_demo}>${url_demo}</a>`);
        res.end();
    });
});

server.listen(PORT);
console.log(`Port ${PORT}: Server File `);