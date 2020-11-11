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
      const { id: issueId } = req.params;
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
  async updateTitle(req, res, next) {
    try {
      const { id: issueId } = req.params;
      const userId = req.user.id;
      const updateTitlePayload = req.body;
      await issueService.updateTitle(
        { issueId, ...updateTitlePayload },
        userId,
      );
      return res.end();
    } catch (err) {
      return next(err);
    }
  },
  async updateMilestone(req, res, next) {
    const { id: issueId } = req.params;
    const updateMilestonePayload = req.body;
    try {
      await issueService.updateMilestone({
        issueId,
        ...updateMilestonePayload,
      });
      return res.end();
    } catch (err) {
      return next(err);
    }
  },
  async updateLabels(req, res, next) {
    const { id: issueId } = req.params;
    const updateLabelsPayload = req.body;
    try {
      await issueService.updateLabels({ issueId, ...updateLabelsPayload });
      return res.end();
    } catch (err) {
      return next(err);
    }
  },
  async updateContents(req, res, next) {
    try {
      const userId = req.user.id;
      const { id: issueId } = req.params;
      const updateContentsPayload = req.body;
      await issueService.updateContents(
        { issueId, ...updateContentsPayload },
        userId,
      );
      return res.end();
    } catch (err) {
      return next(err);
    }
  },
  async updateAssignees(req, res, next) {
    try {
      const { id: issueId } = req.params;
      const updateAssigneesPayload = req.body;
      await issueService.updateAssignees({
        issueId,
        ...updateAssigneesPayload,
      });
      return res.end();
    } catch (err) {
      return next(err);
    }
  },
});

export default IssueController;
