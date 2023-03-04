const express = require('express');

// require('express') is getting back a function
// the functioon returns an object which we call app (common convention)
const app = express();

class ExpressHttpServer {
    reqRes() {
        app.get('/', (req, res) => {
            res.send('index route using express');
        });

        app.get('/example', (req, res) => {
            res.send('example route using express')
        });

        app.get('/example/:name/:city', (req, res) => {
            res.send(`example route WITH PARAMS (name=${req.params.name}, city=${req.params.city}) using express`);
            console.log(`the params in the request are: name => ${req.params.name}, city: ${req.params.city}`);
        });

        app.listen(3004);
    }
}

module.exports = {ExpressHttpServer : ExpressHttpServer}