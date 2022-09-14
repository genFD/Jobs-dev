const dotenv = require('dotenv');
const http = require('http');

const app = require('./app');

//create server
const server = http.createServer(app);
dotenv.config();
// start server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
