const IssueService = ({
  IssueModel,
  UserModel,
  LabelModel,
  MilestoneModel,
}) => {
  const getTotalIssueCount = async () => {
    const totalIssueCount = await IssueModel.count();
    return totalIssueCount;
  };

  const getPagedIssues = async ({ pageParams }) => {
    const { page, LIMIT } = pageParams;
    const offset = (page - 1) * LIMIT;
    const issues = await IssueModel.findAll({
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
  };

  const getIssueList = async ({ page }) => {
    const LIMIT = 15;
    const [totalIssueCount, issues] = await Promise.all([
      getTotalIssueCount(),
      getPagedIssues({
        pageParams: { page, LIMIT },
      }),
    ]);
    const pagination = {
      page,
      lastPage: totalIssueCount / LIMIT + (totalIssueCount % LIMIT ? 1 : 0),
    };
    return { pagination, issues };
  };

  const getIssue = async (id, loggedUserId) => {
    const issue = await IssueModel.findByPk(id, {
      include: [
        {
          model: UserModel,
          as: 'Author',
        },
        {
          model: LabelModel,
          through: { attributes: [] },
        },
        {
          model: UserModel,
          as: 'Assignees',
          through: { attributes: [] },
        },
        {
          model: MilestoneModel,
        },
      ],
    });
    issue.setDataValue('isAuthor', loggedUserId === issue.authorId);
    return issue;
  };

  return {
    getIssueList,
    getIssue,
  };
};

export default IssueService;
