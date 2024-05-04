const Claim = require("../models/claimModel");

class ClaimService {
  static async createClaim(claimData) {
    const createdClaim = await Claim.create(claimData);
    return createdClaim;
  }

  static async getClaims(filters = {}) {
    const claims = await Claim.find(filters).populate({
      path: "user",
      select: "name",
    });
    return claims;
  }
}

module.exports = ClaimService;
