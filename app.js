var GeneralRoutes = require('./routes/general');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');;
var mongoose = require('mongoose');

var app = express();

app.set("port", 9000);

var staticDIR = path.resolve(__dirname, "./static");
app.use(express.static(staticDIR));
app.use(bodyParser.json());

app.use('/api', GeneralRoutes);
app.get("*", function (req, res) {
    var indexViewPath = path.resolve(__dirname, "./static/admin/index.html");
    res.sendFile(indexViewPath);
});
app.listen(app.get("port"), function () {
    console.log("Server started at 9000");
});
