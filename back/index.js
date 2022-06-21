const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const productsRoutes = require('./routes/products.js');
const categoriesRoutes = require('./routes/categories.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.listen(3001, () => console.log('Express app listening on port 3001'));


app.use('/products', productsRoutes);
app.use('/categories', categoriesRoutes);

module.exports = app;




