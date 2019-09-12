var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");


var port = 3000;
var authenticationControl = require("../auth/auth-server");
var registerationControl= require('../register/register-controler')



mongoose.connect("mongodb://localhost:27017/shareApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}, );
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/", registerationControl.create)
app.use("/",authenticationControl.authenticate)
app.listen(port, function () {
    console.log("Server started on port 3000");
});