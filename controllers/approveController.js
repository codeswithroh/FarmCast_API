const ApproveService = require("../services/approveService");

class ApproveController {
  static async changeStatus(req, res) {
    const { id, status } = req.body;
    try {
      const updatedClaim = await ApproveService.changeStatus(id, status);
      res.status(200).json(updatedClaim);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = ApproveController;
