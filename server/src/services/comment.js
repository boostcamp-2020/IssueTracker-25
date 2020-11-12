const CommentService = ({ CommentModel }) => ({
  async registerComment({ contents, issueId }, loggedUserId) {
    const newComment = await CommentModel.create({
      contents,
      issueId,
      userId: loggedUserId,
    });

    return newComment;
  },
});

export default CommentService;
