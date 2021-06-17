"use strict"

const http = require('http'); //http paket bawaan Node.js untuk mendukung fitur2 protokol HTTP
const PORT = 3400;

const server = http.createServer((req,res) => {
    const body = `<pre>Haruskah belajar Node.js?</pre><p><h3>... Yo Mesto!</h3></p>`;

    /**
     *  setting header dilakukan sebelum fungsi res.write() dan res.end() dijalankan
        karena jika res.write() dijalankan tetapi kemudian ada perubahan field header maka 
        perubahan ini akan diabaikan.

        Content-Type harus berupa text/html agar respon dari request diperlakukan sebagai HTML pada Browser

        Sumber : https://idjs.github.io/belajar-nodejs/server_http_dasar/index.html
     */
    res.writeHead(200, {
        'Content-Length':body.length,
        'Content-Type':'text/html',
        'Pesan-Header':'Pengenalan Node.js'
    });

    res.write(body);
    res.end();
});

server.listen(PORT);

console.log(`Port ${PORT} : Node.js Server...`);
