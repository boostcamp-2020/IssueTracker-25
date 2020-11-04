const LabelController = (userService) => ({
  async readList(req, res, next) {
    try {
      const users = await userService.getUserList();
      return res.status(200).json(users);
    } catch (err) {
      return next(err);
    }
  },
});

export default LabelController;
