const express = require("express");
const { body, validationResult } = require("express-validator");
const dataDisplayControllerRoute = require("../controller/dataDisplayController");

const router = express.Router();

router.post("/foodData", dataDisplayControllerRoute.dataController);
module.exports = router;
