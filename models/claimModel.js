const mongoose = require("mongoose");

const claimSchema = new mongoose.Schema({
  fromTime: {
    type: Date,
    required: true,
  },
  toTime: {
    type: Date,
    required: true,
  },
  reason: {
    type: String,
    required: true,
    enums: ["RAIN", "DROUGHT", "STORM", "FLOOD", "HAIL", "FIRE", "OTHERS"],
  },
  status: {
    type: String,
    required: true,
    default: "PENDING",
    enums: ["PENDING", "APPROVED", "REJECTED"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Claim = mongoose.models.Claim || mongoose.model("Claim", claimSchema);

module.exports = Claim;
