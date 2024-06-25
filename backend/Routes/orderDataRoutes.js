const express = require("express");
const { body, validationResult } = require("express-validator");
const orderDataControllerRoute = require("../controller/orderDataController");

const router = express.Router();

router.post("/orderData", orderDataControllerRoute.orderDataController);
router.post("/myorderData", orderDataControllerRoute.myorderDataController);
module.exports = router;
