const express = require('express');
const methodOverride = require('method-override');

const route = require('./routes/client/index.route');
const routeAdmin = require('./routes/admin/index.route')

require('dotenv').config();

const app = express();
const port = process.env.PORT;
const database = require('./config/database');
const systemConfig = require('./config/system');

database.connect();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
//App locals Variables
app.locals.prefixAdmin = systemConfig.prefixAdmin;

routeAdmin(app);
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
