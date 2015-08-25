
var express = require('express');
var app = express();

app.use('/better-minecraft-net', express.static(__dirname));

app.listen(9000);
