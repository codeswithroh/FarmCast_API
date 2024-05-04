const ClaimService = require("../services/claimService");

class ClaimController {
  static async createClaim(req, res) {
    const claimData = req.body;
    try {
      const createdClaim = await ClaimService.createClaim(claimData);
      res.status(201).json(createdClaim);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getClaims(req, res) {
    const filters = req.query || {};
    try {
      const claims = await ClaimService.getClaims(filters);
      res.status(200).json(claims);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = ClaimController;
