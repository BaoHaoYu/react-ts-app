var express = require("express");
var app = express();
app.use(express.static("__build__/development"));

app.listen(3000);
