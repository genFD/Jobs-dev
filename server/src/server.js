const express = require('express');
const dotenv = require('dotenv');
const http = require('http');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const api = require('./routes/api');

// const app = require('./app');

const app = express();
app.use(morgan('combined'));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/v1', api);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

//create server
const server = http.createServer(app);
dotenv.config();
// start server
const PORT = process.env.PORT || 8000;
// server.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`);
// });
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
module.exports = app;
