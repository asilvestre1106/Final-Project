const express = require('express');
const app = express();

app.post('/register', (req, res) => {
  res.json('It works2!') 
});

app.listen(4000);