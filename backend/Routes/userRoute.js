const express = require("express");
const { body, validationResult } = require("express-validator");
const {
  registerValidator,
  verifyOtpValidator,
  loginValidator,
} = require("../helpers/validation");
const userControllerRoute = require("../controller/userController");

//router object
const router = express.Router();

//REGISTER USER
router.post(
  "/register",
  registerValidator,
  userControllerRoute.registerController
);
//verify otp
router.post(
  "/verifyOtp",
  verifyOtpValidator,
  userControllerRoute.verifyController
);
//LOGIN USER
router.post("/login", loginValidator, userControllerRoute.loginController);
module.exports = router;
