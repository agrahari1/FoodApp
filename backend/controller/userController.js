require("dotenv").config();
const userModelController = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const { sendOTP } = require("../utils/sendOTP");
const OtpModel = require("../models/otpModel");
const jwtkey = process.env.SERVER_KEY;
// Register user
const registerController = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({
        success: false,
        message: "Enter valid input",
        errors: errors.array(),
      });
    }

    const { name, email, password, address } = req.body; // Changed from req.headers to req.body
    const existingUser = await userModelController.findOne({ email });
    if (existingUser) {
      return res.status(401).send({
        success: false,
        message: "User already exists",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new userModelController({
      name,
      email,
      password: hashedPassword,
      address,
    });
    await user.save();
    const otp = Math.floor(100000 + Math.random() * 900000);
    await sendOTP(email, otp);
    await new OtpModel({ email, otp }).save();
    return res.status(201).send({
      success: true,
      message: "User registered successfully, OTP sent to email",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Server error",
    });
  }
};
//VERIFICATION
const verifyController = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({
        success: false,
        message: "Enter valid input",
        errors: errors,
      });
    }
    const { email, otp } = req.body;
    const findOtp = await OtpModel.findOne({ email });
    if (!findOtp) {
      return res.status(400).send({
        success: false,
        message: "OTP not found or expired",
      });
    }

    if (findOtp.otp != req.body.otp) {
      return res.status(400).send({
        success: false,
        message: "Invalide OTP Provide",
      });
    }
    await OtpModel.deleteOne({ email });
    await userModelController.findOneAndUpdate({ email }, { isVerify: true });
    res.status(200).send({
      success: true,
      message: "OTP verify successfully",
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal server error ",
      success: false,
      error,
    });
  }
};
//LOGIN
const loginController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      success: false,
      message: "Enter valid input",
      errors: errors,
    });
  }
  const { email, password } = req.body;
  const findUser = await userModelController.findOne({ email });
  if (!findUser) {
    return res.status(400).send({
      success: false,
      message: "Email is not Registered",
    });
  } else {
    const compare = await bcrypt.compare(password, findUser.password);
    if (!compare) {
      return res.status(401).send({
        success: false,
        message: "Invalid Credentials",
      });
    }
    if (!findUser.isVerify) {
      return res.status(400).send({
        success: false,
        message: "Please verify your email first",
      });
    }
    const token = jwt.sign({ userId: findUser._id }, jwtkey, {
      expiresIn: "1h",
    });
    return res.status(200).send({
      success: true,
      message: "Login Successfully !",
      data: findUser,
      token,
    });
  }
};
module.exports = {
  registerController,
  verifyController,
  loginController,
};
