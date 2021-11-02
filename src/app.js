const path = require('path');
const express = require('express');

const routes = require('./routes');

const {
    NotFoundError
} = require('./utils/Errors');
const { 
    expressErrorHandler
} = require('./utils/errorHandler');

const app = express();



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

// Setting routes
app.use(routes);

app.get('*', (req, res, next) => {
    next(new NotFoundError());
});

app.use(expressErrorHandler);


module.exports = app;