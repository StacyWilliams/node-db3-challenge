const express = require("express");
const helmet = require("helmet");

const schemeRouter = require('./schemes/scheme-router.js');

const server = express();
server.use(helmet())
server.use(express.json());
server.use('/api/schemes', schemeRouter);

module.exports = server;

server.get("/", (req, res) => {
  res.status(200).json({ message: "It's working!!" });
});


module.exports = server;