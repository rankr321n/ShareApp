var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
var port = 3000;
var authenticationControl = require("../auth/auth-server");
// var registerationControl = require('../register/register-controler')
var regcont = require("../register/register-confirm");
var confirm = require("../register/confirm-mailer");

mongoose.connect("mongodb://localhost:27017/shareApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

var app = express();
app.use(cors());
app.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use("/register", regcont.signupPost);
//app.use("/confirmation", confirm.confirmUser);

app.use("/login", authenticationControl.authenticate);
app.listen(port, function() {
  console.log("Server started on port 3000");
});
