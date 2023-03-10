const express = require('express');
const app = express();

// app.set enables to configure application settings.
// the following, sets ejs as the view engine.
// ejs will now be used to create the templates.
// the default folder ejs is lokking for is views.
// so all the ejs files will be in views
app.set('view engine', 'ejs');

// setting a different location can be done like this:
// app.set('views', 'different_views_location');

// the express.static middleware enables expose of the folder
// content to the browser. in this case i wanted to expose the css
app.use(express.static('static_files'))

// listen for requests
app.listen(5000);

app.get(`/`, (req, res) => {
    res.render('index');
});

app.get('/forms/create', (req, res) =>{
    formsData = [{ title: 'form title 1', content: 'form content 1' },
                 { title: 'form title 2', content: 'form content 2' },
                 { title: 'form title 3', content: 'form content 3' },
                 { title: 'form title 4', content: 'form content 4' }]
    res.render('form', formsData);
});