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
    //helpers: handlebarsHelpers,
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/client', clientRouter);
// app.get('/test', (req, res) => {
//
//     res.send(db.getOne("2615c580-0994-4690-b8ba-e2933764967d").name);
// })

app.use(handleError);

app.listen(3000, 'localhost', () => {
    console.log('listening on http://localhost:3000');
});
