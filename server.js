const express = require("express");
const app = express();
const path = require("path");

const proxy = require('http-proxy-middleware')
var apiProxy = proxy('/api', {target: 'https://dpaulacont-back.herokuapp.com'});

app.use(apiProxy)

app.use(express.static(__dirname + "/dist"));

app.listen(process.env.PORT || 8080);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});



console.log("Americas Connectadas!");
