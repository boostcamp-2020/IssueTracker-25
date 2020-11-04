const IssueService = ({
  IssueModel,
  UserModel,
  LabelModel,
  MilestoneModel,
}) => ({
  getIssueList({ page }) {
    const LIMIT = 15;
    const offset = page * LIMIT;
    const issues = IssueModel.findAll({
      attributes: {
        exclude: ['contents'],
      },
      offset,
      limit: LIMIT,
      order: [['id', 'DESC']],
      include: [
        {
          model: UserModel,
          as: 'Author',
          attributes: ['id', 'name'],
        },
        {
          model: LabelModel,
          through: { attributes: [] },
        },
        {
          model: UserModel,
          as: 'Assignees',
          attributes: ['id', 'profileLink'],
          through: { attributes: [] },
        },
        {
          model: MilestoneModel,
          attributes: ['id', 'title'],
        },
      ],
    });
    return issues;
  },
});

export default IssueService;
