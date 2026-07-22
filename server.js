const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.get('/api/data', (req, res) => {
  res.json({ secret: 'sensitive-data-12345' });
});
