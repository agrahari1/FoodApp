const { check } = require("express-validator");

const registerValidator = [
  check("name", "Name is required").not().isEmpty(),
  check("email", "Please include a valid email").isEmail().normalizeEmail({
    gmail_remove_dots: true,
  }),
  check(
    "password",
    "Password must be greater than 6 characters, and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
  ).isStrongPassword({
    minLength: 6,
    minUppercase: 1,
    minLowercase: 1,
    minNumbers: 1,
  }),
  check("address", "Address is required").not().isEmpty(),
  // Uncomment and adjust as needed
  // check("image").custom((value, { req }) => {
  //   if (req.file && (req.file.mimetype === "image/jpeg" || req.file.mimetype === "image/png")) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }).withMessage("Please upload an image (jpeg, png)"),
];
const verifyOtpValidator = [
  check("email", "Please include a valid email").isEmail().normalizeEmail({
    gmail_remove_dots: true,
  }),
  check("otp", "OTP is required and must be exactly 6 digits")
    .isLength({ min: 6, max: 6 })
    .isNumeric(),
  // .withMessage("OTP must contain only numeric characters"),
];
const loginValidator = [
  check("email", "Please include a valid email").isEmail().normalizeEmail({
    gmail_remove_dots: true,
  }),
  check(
    "password",
    "Password must be greater than 6 characters, and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
  ).isStrongPassword({
    minLength: 6,
    minUppercase: 1,
    minLowercase: 1,
    minNumbers: 1,
  }),
];
module.exports = { registerValidator, verifyOtpValidator, loginValidator };
