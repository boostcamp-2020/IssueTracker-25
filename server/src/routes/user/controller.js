const UserController = (userService) => ({
  async getUserList(req, res, next) {
    try {
      const users = await userService.getUserList();
      return res.status(200).json(users);
    } catch (err) {
      return next(err);
    }
  },
  getLoggedUserInfo(req, res) {
    res.json(req.user);
  },
});

export default UserController;
