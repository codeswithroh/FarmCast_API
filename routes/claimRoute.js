const express = require("express");
const ClaimController = require("../controllers/claimController");

const router = express.Router();

router.post("/", ClaimController.createClaim);
router.get("/", ClaimController.getClaims);

module.exports = router;
