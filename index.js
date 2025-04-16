




const express = require('express');
const path = require('path');

const app = express();

// Set the view engine as EJS
app.set('view engine', 'ejs');

// ✅ Fix: set the directory for the views
app.set('views', path.join(__dirname, 'views'));

const products = [
  { id: 1, title: 'product 1' },
  { id: 2, title: 'product 2' },
  { id: 3, title: 'product 3' }
];

// Home route
app.get('/', (req, res) => {
  res.render('home', { title: 'Home', products: products });
});

// About route
app.get('/about', (req, res) => {
  res.render('about', { title: 'About Page' });
});

const port = 3000;
app.listen(port, () => {
  console.log('Server is running on port', port);
});
