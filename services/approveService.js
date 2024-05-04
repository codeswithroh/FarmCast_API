const Claim = require("../models/claimModel");

class ApproveService {
  static async changeStatus(id, status) {
    const updatedClaim = await Claim.findByIdAndUpdate(
      id,
      { $set: { status: status } },
      { new: true }
    );
    return updatedClaim;
  }
}

module.exports = ApproveService;
