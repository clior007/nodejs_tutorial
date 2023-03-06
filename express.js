const path = require('path')
const express = require('express');
const { response } = require('express');

// require('express') is getting back a function
// the functioon returns an object which we call app (common convention)
const app = express();

class ExpressHttpServer {
    reqRes() {
        // http://localhost:3004
        app.get('/', (req, res) => {
            res.send('express example - index routing');
        });

        // http://localhost:3004/example
        app.get('/example', (req, res) => {
            res.send('express example - routing')
        });

        // http://localhost:3004/example/lior/telaviv?search=keyword&sort=price
        app.get('/example/:name/:city', (req, res) => {
            // Use params for mandatory req data and query for optional req data
            console.log(`the params in the request are: name => ${req.params.name}, city: ${req.params.city}`);
            console.log(`the queries in the request are: ${JSON.stringify(req.query)}`);
            res.send(`express example - route WITH PARAMS (name=${req.params.name}, city=${req.params.city}) and queries (${JSON.stringify(req.query)})`);
        });

        app.listen(3004);
    }

    servingStaticFiles(){
        // app.use - in this example shows a middleware function with "public" mount path.
        // The function is executed every time the app receives a request.
        console.log(`serving index html on every the root url222222222`);
        app.use('/public2', express.static(path.join(__dirname, 'static_files')));
        app.get('/lior', (req, res) => {
            res.sendFile(path.join(__dirname, 'static_files', 'index.html'));
            console.log(`serving index html on every the root url`);
        });
        app.listen(3005);
    }
}

module.exports = {ExpressHttpServer : ExpressHttpServer}