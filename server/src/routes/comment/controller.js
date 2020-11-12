const CommentController = (commentService) => ({
  async registerComment(req, res, next) {
    try {
      const userId = req.user.id;
      const registerPayload = req.body;
      const newComment = await commentService.registerComment(
        registerPayload,
        userId,
      );
      return res.status(201).json(newComment);
    } catch (err) {
      return next(err);
    }
  },
});

export default CommentController;
