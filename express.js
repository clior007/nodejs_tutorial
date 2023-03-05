const express = require('express');

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
            console.log(`the params in the request are: name => ${req.params.name}, city: ${req.params.city}`);
            console.log(`the queries in the request are: ${JSON.stringify(req.query)}`);
            res.send(`express example - route WITH PARAMS (name=${req.params.name}, city=${req.params.city}) and queries (${JSON.stringify(req.query)})`);
        });

        app.listen(3004);
    }
}

module.exports = {ExpressHttpServer : ExpressHttpServer}