const express = require('express');
const path = require('path');
const connectDB = require('./config/db');


const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const app = express();
const port = 2305;

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.redirect('/products');
});
// Sử dụng router cho sản phẩm
const productRoutes = require('./routes/product');
app.use('/products', productRoutes);




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
