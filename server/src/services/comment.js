const CommentService = ({ CommentModel, UserModel, sequelize }) => ({
  async registerComment({ contents, issueId }, loggedUserId) {
    const transaction = await sequelize.transaction();
    try {
      const { id } = await CommentModel.create(
        {
          contents,
          issueId,
          userId: loggedUserId,
        },
        transaction,
      );
      const newComment = await CommentModel.findByPk(
        id,
        {
          include: [UserModel],
        },
        transaction,
      );
      await transaction.commit();
      return newComment;
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
});

export default CommentService;
