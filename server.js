const express = require('express');
const app = express();
const password = "admin123456";

app.get('/api/user', (req, res) => {
  const name = req.query.name;
  const exec = require('child_process');
  exec('echo ' + name);
  res.send('hello ' + name);
});

app.listen(3000);
