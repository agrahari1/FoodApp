const nodemailer = require("nodemailer");

async function sendOTP(email, otp) {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "agrahariprashant1@gmail.com",
        pass: "yuhy rpzb fwcw tttm",
      },
    });

    let mailOptions = {
      from: "agrahariprashant1@gmail.com",
      to: email, // Corrected to use the provided email parameter
      subject: "Your Email Verification OTP",
      html: `<strong>Your OTP for email verification is ${otp}</strong>`, // Changed to html from text
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending OTP:", error.message, error.stack); // Improved error logging
    return false;
  }
}

module.exports = { sendOTP };
