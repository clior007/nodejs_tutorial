// Middleware is every piece of code running between a
// request and responce on the server side
// actually all the code in this tutorial is middleware.
// Middleware can be used for url autontication, logging, parsing jsons, etc.
// All middleware code is taking place in order
// For example, if we have a get middleware and a response is sent to the client,
// no additional middleware code will be executed afterwards.
// To move between middlewares you can either send the responce or use next
// as in the example
// There are already many middlewares that are implemented and ready to use
// For example, morgan is a logger middleware, helemt is security middleware and
// there are others for sessions, cookies and so on
const express = require('express');
const app = express();

app.use((req, res, next) => {
    // do here all url autontication, logging, parsing jsons, etc
    // use the next function to move to the next middleware
    console.log(`rquest url: ${req.url}`);
    console.log(`request cookies: ${req.cookies}`);
    // etc .......
    // once we done and since we are not sending any responce,
    // to move forward to the next middleware we need to use next()
    next();
});

app.use((req, res, next) => {
    console.log(`in the next middleware ...`);
    next();
});

app.get('/', (req, res) => {
    res.send(`middleware example response`);
});

app.listen(5001);