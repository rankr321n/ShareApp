var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
const router = express.Router();
require("dotenv").config();

var port = 3000;

var authenticationControl = require("./src/auth/auth-server");
var getUserDataForAdmin = require("./src/AdminManagement/get-users");
var regcont = require("./src/register/register-confirm");
var termController = require("./src/AdminManagement/terms-controller");
var terms = require("./src/AdminManagement/get-terms");
var blockUserControl = require("./src/AdminManagement/block-access");
var unblockControl = require("./src/AdminManagement/unblock-access");
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
app.use("/getuser", getUserDataForAdmin.getUser);
app.use("/terms", termController.terms);
app.use("/termsandconditions", terms.getTerms);
app.use("/login", authenticationControl.authenticate);
app.use("/block", blockUserControl.blockUser);
app.use("/unblock", unblockControl.unblockUser);

app.listen(port, function() {
  console.log("Server started on port 3000");
});
