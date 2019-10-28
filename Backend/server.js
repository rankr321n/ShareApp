var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
// const router = express.Router();
require("dotenv").config();

var port = 3000;
var getUserForUser = require("./src/UserServices/getRegisteredUsers");
var authenticationControl = require("./src/auth/auth-server");
var getUserDataForAdmin = require("./src/AdminManagement/get-users");
var regcont = require("./src/register/register-confirm");
var termController = require("./src/AdminManagement/terms-controller");
var terms = require("./src/AdminManagement/get-terms");
var blockUserControl = require("./src/AdminManagement/block-access");
var unblockControl = require("./src/AdminManagement/unblock-access");
var FriendRequest = require("./src/UserServices/friendModule");
var verify = require("./src/auth/verify");
var dashboard = require("./src/auth/getLoggedInUser");
var update = require("./src/UserServices/updateUser");
var imageupdate = require("./src/UserServices/userprofileImageupdate");
var registerVerification = require("./src/register/verify-regtoken");
var userRoute = require("./src/UserServices/FileUploads");

mongoose
  .connect("mongodb://localhost:27017/shareApp", { useCreateIndex: true })
  .then(
    () => {
      console.log("Database sucessfully connected");
    },
    error => {
      console.log("Database could not be connected: " + error);
    }
  );

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
// router.use(
//     bodyParser.urlencoded({
//         extended: false
//     })
// );
//Shared Routes
app.use("/login", authenticationControl.authenticate);

app.use("/dashboard", verify, dashboard.get_loggedIn_user);
app.use("/register", regcont.signupPost);
app.use("/termsandconditions", verify, terms.getTerms);

//Admin routes
app.use("/getuser", verify, getUserDataForAdmin.getUser);
app.use("/terms", termController.terms);
app.use("/block", verify, blockUserControl.blockUser);
app.use("/unblock", verify, unblockControl.unblockUser);

//User Routes
//FriendsModule Routes
app.use("/getreguser", verify, getUserForUser.getRegUserForuser); //get memberlist registered on app for user
// app.use('/searchFriend', verify ,FriendRequest.get_friend)
app.use("/sendFriendRequest", verify, FriendRequest.post_friend_request);
app.use(
  "/acceptFriendRequest",
  verify,
  FriendRequest.post_accept_friend_requests
);
app.use("/update/", verify, update.UpdateUserDetails);
app.use("/view", verify, update.ViewUserDetails);
app.use("/upload", imageupdate);
app.use("/", imageupdate);
app.use("/verify/:token", registerVerification.RegVer);

// File Server Routes

app.use("/api", userRoute);

app.use("/public", express.static("public"));

app.listen(port, function() {
  console.log("Server started on port 3000");
});
