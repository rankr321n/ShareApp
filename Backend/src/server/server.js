var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");

var port = 3000;
var authControl = require("../auth/auth-server.js");

mongoose.connect("mongodb://localhost:27017/shareApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, );
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/", authControl);

app.listen(port, function () {
    console.log("Server started on port 3000");
});