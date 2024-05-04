const express = require("express");
const ApproveController = require("../controllers/approveController");

const router = express.Router();

router.put("/", ApproveController.changeStatus);

module.exports = router;
