const IssueController = (issueService) => ({
  async readList(req, res, next) {
    try {
      const page = Math.max(1, req.query.page || 1) - 1;
      const issues = await issueService.getIssueList({ page });
      return res.status(200).json(issues);
    } catch (err) {
      return next(err);
    }
  },
});

export default IssueController;
