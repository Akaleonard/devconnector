const express = require("express");

const server = express();

server.use(express.json({ extended: false }));
server.use("/api/users", require("./routes/api/users"));
server.use("/api/profile", require("./routes/api/profile"));
server.use("/api/auth", require("./routes/api/auth"));

module.exports = server;
