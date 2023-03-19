const express = require("express");
const path = require('path');
const db = require('./config/connection');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
require("dotenv").config({ path: "./.env" }); 

const port = process.env.PORT || 3000;

// Route to handle incoming requests
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});
app.use('/user', [require('./routes/user.router')]);

db.connect.sync
mongoose.connection.once('open', () => {
  console.log('Connected to mongo db');

  // Start the server
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
  app.on('error', onError);
  app.on('listening', onListening);
});



// event listener for HTTP server "error" event.
function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
  
  // event listener for HTTP server "listening" event
  function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }