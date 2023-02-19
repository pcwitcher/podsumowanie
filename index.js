const express = require('express');
const hbs = require('express-handlebars');
const methodOverride = require('method-override');
const {clientRouter} = require("./routers/clients");
const {homeRouter} = require("./routers/home");
const {db} = require('./utils/db');
const {handleError} = require("./utils/error");

const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.engine('.hbs', hbs.engine({
    extname: '.hbs',
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/client', clientRouter);

app.use(handleError);

app.listen(3000, 'localhost', () => {
    console.log('listening on http://localhost:3000');
});
