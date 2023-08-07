const express = require('express');
const app = express();
const port = 3000;


app.get('/login', (req, res) => {
  res.sendFile('login.html');
});


app.get('/signup', (req, res) => {
  res.sendFile('signup.html');
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
const express = require('express');
const app = express();
const port = 3000;


app.get('/login', (req, res) => {
  res.sendFile('login.html');
});


app.get('/signup', (req, res) => {
  res.sendFile('signup.html');
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
