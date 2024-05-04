const UserService = require("../services/userService");

class UserController {
  static async createUser(req, res, next) {
    const userData = req.body;
    try {
      const createdUser = await UserService.createUser(userData);
      res.status(201).json(createdUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getUsers(req, res, next) {
    const filters = req.query || {};
    try {
      const users = await UserService.getUsers(filters);
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = UserController;
