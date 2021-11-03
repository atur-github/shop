const path = require('path');
const express = require('express');
const session = require('cookie-session');

const routes = require('./routes');

const {
    NotFoundError
} = require('./utils/Errors');
const { 
    expressErrorHandler
} = require('./utils/errorHandler');

const app = express();


app.use(session({
    keys: [process.env.SESSION_KEY1, process.env.SESSION_KEY2],
    name: 'session',
    maxAge: 24 * 60 * 60 * 1000
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Setting routes
app.use(routes);

app.get('*', (req, res, next) => {
    next(new NotFoundError());
});

app.use(expressErrorHandler);


module.exports = app;