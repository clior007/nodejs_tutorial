const express = require('express');
const app = express();

const mongoose = require('mongoose');
const form = require('./formschema')

mongoURI = 'mongodb+srv://clior43:z5wcchGj@nodejscluster.t7lx7x7.mongodb.net/NodeJS?retryWrites=true&w=majority'
mongoose.connect(mongoURI)
.then((result) => {
    console.log(`conneted to mongo`);
    app.listen(5002);
    console.log(`now listening to requests on port 5002`);
})
.catch((err) => console.log(`failed to connect to mongo. err: ${err}`))

app.set('view engine', 'ejs')
app.use(express.static('static_files'))

app.get('/add-form', (req, res) => {
    let now = new Date()
    const formdata = new form({
        title: `form title ${now}`,
        content: `form content ${now}`
    })

    formdata.save()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
});

app.get('/all-forms', ((req, res) => {
    
    form.find()
    .then((result) => {
        formsData = result;
        res.render('form', formsData);
    })
    .catch((err) => {
        console.log(err);
    })
}));
