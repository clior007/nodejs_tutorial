const path = require('path')
const express = require('express');

// require('express') is getting back a function
// the functioon returns an object which we call app (common convention)
const app = express();

// the express.static middleware enables expose of the folder
// content to the browser. in this case i wanted to expose the css
app.use(express.static('static_files'))

class ExpressHttpServer {
    reqRes() {
        // http://localhost:4000
        app.get('/', (req, res) => {
            res.send('express example - index routing');
        });

        // http://localhost:4000/example
        app.get('/example', (req, res) => {
            console.log(`the url in the request is: ${req.url}`);
            res.send('express example - routing');
        });

        // Any routing that starts with "example" will be redirected to "/example"
        app.get('/example*', (req, res) => {
            console.log(`the url in the request is: ${req.url}. the request will be redirected to http://localhost:3004/example`)
            res.redirect('/example');
        });

        // http://localhost:4000/example/lior/telaviv?search=keyword&sort=price
        app.get('/example/:name/:city', (req, res) => {
            // Use params for mandatory req data and query for optional req data
            console.log(`the params in the request are: name => ${req.params.name}, city: ${req.params.city}`);
            console.log(`the queries in the request are: ${JSON.stringify(req.query)}`);
            res.send(`express example - route WITH PARAMS (name=${req.params.name}, city=${req.params.city}) and queries (${JSON.stringify(req.query)})`);
        });

        // the fallback to all other routes
        app.use((req, res) => {
            console.log(`the route was not found`);
            res.status(404).sendFile(path.join(__dirname, 'static_files/404.html'));
        });

        app.listen(4000);
    }

    servingStaticFiles(){
        // app.use - this example shows a middleware function with "public" mount path.
        // this way you can hide the internal structure and can be flexiable to futture changes
        console.log(`serving index html on every the root url`);
        app.use('/public', express.static(path.join(__dirname, 'static_files')));
        app.get('/lior', (req, res) => {
            res.sendFile(path.join(__dirname, 'static_files', 'index.html'));
            console.log(`serving index html on every root url`);
        });
        app.listen(4001);
    }
}

module.exports = {ExpressHttpServer : ExpressHttpServer}