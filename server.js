require("dotenv").config();

const express = require("express");
const app = express();
var os = require("os");

app.get("/", function (req, res) {
  res.json({
    serverName: "hiamt34-server",
    ip: "123.17.159.125",
    port: process.env.PORT,
    domain: "hiamt9a.online",
    memory: os.totalmem(),
    os: os.platform(),
    arch: os.arch(),
    core: os.cpus(),
  });
});

app.listen(process.env.PORT);
