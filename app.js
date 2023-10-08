// server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes'); // Import your routing file

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static(__dirname + '/public'));

// Use the routing file for defining routes
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
