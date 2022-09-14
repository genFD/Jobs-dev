const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const api = require('./routes/api');

const app = express();

app.use(morgan('combined'));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join('public', 'index.html')));
app.use('/v1', api);
app.get('/*', (req, res) => {
  res.sendFile(path.join('public', 'index.html'));
});
console.log(path.join('public', 'index.html'));
module.exports = app;
