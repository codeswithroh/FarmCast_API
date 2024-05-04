const User = require("../models/userModel");

class UserService {
  static async createUser(userData) {
    const createdUser = await User.create(userData);
    return createdUser;
  }

  static async getUsers(filters = {}) {
    const users = await User.find(filters);
    return users;
  }
}

module.exports = UserService;
