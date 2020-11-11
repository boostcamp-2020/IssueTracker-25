const IssueController = (issueService) => ({
  async getIssueList(req, res, next) {
    try {
      const page = Math.max(1, req.query.page || 1);
      const { pagination, issues } = await issueService.getIssueList({ page });
      return res.status(200).json({ pagination, issues });
    } catch (err) {
      return next(err);
    }
  },
  async getIssue(req, res, next) {
    try {
      const issueId = req.params.id;
      const userId = req.user.id;
      const issue = await issueService.getIssue(issueId, userId);
      return res.status(200).json(issue);
    } catch (err) {
      return next(err);
    }
  },
  async registerIssue(req, res, next) {
    try {
      const userId = req.user.id;
      const registerPayload = req.body;
      const newIssueId = await issueService.registerIssue(
        registerPayload,
        userId,
      );
      return res.status(200).json({ id: newIssueId });
    } catch (err) {
      return next(err);
    }
  },
});

export default IssueController;
