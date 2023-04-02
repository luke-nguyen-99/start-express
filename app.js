require("dotenv").config({ path: "./.env" });
const express = require("express");
const path = require("path");
const db = require("./config/connection");
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 3000;
app.use(bodyParser.json({ limit: '25mb' }));
app.use(bodyParser.urlencoded());

// Route to handle incoming requests
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});
app.use("/user", [require("./routes/user.route")]);
app.use('/upload', [require('./routes/upload.route')]);

//swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'A sample API using Swagger and Express',
    },
  },
  apis: ['./routes/*.route.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
db.sequelize
  .sync()
  .then(() => {
    console.log("Connected db.");
    // Start the server
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
    app.on("error", onError);
    app.on("listening", onListening);
  })
  .catch((err) => {
    console.log("Failed to connect db: " + err.message);
  });

// event listener for HTTP server "error" event.
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// event listener for HTTP server "listening" event
function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}