const IssueController = (issueService) => ({
  async getIssueList(req, res, next) {
    try {
      const page = Math.max(1, req.query.page || 1) - 1;
      const issues = await issueService.getIssueList({ page });
      return res.status(200).json(issues);
    } catch (err) {
      return next(err);
    }
  },
  async getIssue(req, res, next) {
    try {
      const issueId = req.params.id;
      const issue = await issueService.getIssue(issueId, req.user.id);
      return res.status(200).json(issue);
    } catch (err) {
      return next(err);
    }
  },
});

export default IssueController;
