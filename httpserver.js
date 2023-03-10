const http = require('http');
const fs = require('fs');

class HttpServer {
    reqRes(){
        var server = http.createServer((req, res) => {
            // main route
            if (req.url == '/') {
                console.log(`req received on root url`)
                res.write(`hello world`);
                res.end();
            }

            // all other routes
            else {
                console.log(`req received NOT on root url`);
                res.write(`req received not on root url`);
                res.end();
            }
        });
        server.listen(3000);
    }

    servingStaticFiles(){
        var server3001 = http.createServer((req, res) => {
            let exampleFile = fs.createReadStream('./static_files/example.html');
            res.writeHead(200, {'contenttype' : 'text/html'});
            exampleFile.pipe(res);
        }).listen(3001);

        var server3002 = http.createServer((req, res) => {
            let exampleFile = fs.createReadStream('./static_files/example.json');
            res.writeHead(200, {'contenttype' : 'application/json'});
            exampleFile.pipe(res);
        }).listen(3002);

        var server3003 = http.createServer((req, res) => {
            let exampleFile = fs.createReadStream('./static_files/OPEN.jpg');
            res.writeHead(200, {'contenttype' : 'image/jpg'});
            exampleFile.pipe(res);
        }).listen(3003);
    }
}

module.exports = {HttpServer : HttpServer}