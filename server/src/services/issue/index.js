const IssueService = ({
  IssueModel,
  UserModel,
  LabelModel,
  MilestoneModel,
  CommentModel,
  Sequelize,
}) => {
  const { Op } = Sequelize;
  const messages = {
    NOT_FOUND: '등록되지 않은 이슈 id 입니다.',
    ACCESS_DENIED: '접근 권한이 없습니다.',
  };

  const getPagedIssues = async ({ pageParams, whereOption }) => {
    const { page, LIMIT } = pageParams;
    const offset = (page - 1) * LIMIT;
    const issues = await IssueModel.findAndCountAll({
      attributes: {
        exclude: ['contents'],
      },
      where: whereOption.open,
      offset,
      limit: LIMIT,
      order: [['id', 'DESC']],
      include: [
        {
          model: UserModel,
          as: 'Author',
          attributes: ['id', 'name'],
          where: whereOption.author,
        },
        {
          model: LabelModel,
          through: { attributes: [] },
          where: whereOption.label,
        },
        {
          model: UserModel,
          as: 'Assignees',
          attributes: ['id', 'profileLink'],
          through: { attributes: [] },
          where: whereOption.assignee,
        },
        {
          model: MilestoneModel,
          attributes: ['id', 'title'],
          where: whereOption.milestone,
        },
      ],
    });
    return issues;
  };
  const getUserbyName = (name) => {
    return UserModel.findOne({ where: { name } });
  };
  const getIssueList = async ({ page, whereOption }) => {
    const LIMIT = 15;
    const { count, rows: issues } = await getPagedIssues({
      pageParams: { page, LIMIT },
      whereOption,
    });
    const pagination = {
      page,
      lastPage: Math.ceil(count / LIMIT),
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
        {
          model: CommentModel,
          attributes: ['id', 'contents', 'createdAt', 'updatedAt'],
          include: [
            {
              model: UserModel,
            },
          ],
        },
      ],
    });

    const issueDto = issue.toJSON();
    issueDto.isAuthor = loggedUserId === issue.authorId;
    return issueDto;
  };

  const getAssociatedLabels = async (labels) => {
    if (!labels) {
      return null;
    }
    const associatedLabels = await LabelModel.findAll({
      where: {
        id: {
          [Op.in]: labels,
        },
      },
    });
    return associatedLabels;
  };

  const getAssociatedAssignees = async (assignees) => {
    if (!assignees) {
      return null;
    }
    const associatedAssignees = await UserModel.findAll({
      where: {
        id: {
          [Op.in]: assignees,
        },
      },
    });
    return associatedAssignees;
  };

  const registerIssue = async (payload, loggedUserId) => {
    const { title, contents, milestoneId } = payload;
    const newIssue = {
      title,
      contents,
      milestoneId,
      authorId: loggedUserId,
    };
    const issue = await IssueModel.create(newIssue);
    const [labels, assignees] = await Promise.all([
      getAssociatedLabels(payload.labels),
      getAssociatedAssignees(payload.assignees),
    ]);
    if (labels) {
      issue.addLabels(labels);
    }
    if (assignees) {
      issue.addAssignees(assignees);
    }
    return issue.id;
  };
  const updateMilestone = async (issueId, milestoneId) => {
    const issue = await IssueModel.findByPk(issueId);
    const id = issue.milestoneId === milestoneId ? null : milestoneId;
    issue.milestoneId = id;
    await issue.save();
  };
  const updateLabels = async (issueId, labels) => {
    const issue = await IssueModel.findByPk(issueId, {
      include: {
        model: LabelModel,
        through: { attributes: [] },
      },
    });
    await issue.removeLabels(issue.Labels);
    const associatedLabels = await getAssociatedLabels(labels);
    if (associatedLabels) {
      await issue.addLabels(associatedLabels);
    }
    return issue;
  };

  const checkIsAuthor = (issue, loggedUserId) => {
    if (issue.authorId === loggedUserId) {
      return true;
    }
    return false;
  };

  const getValidIssue = async (issueId, loggedUserId) => {
    const issue = await IssueModel.findByPk(issueId);
    if (!issue) {
      throw new Error(messages.NOT_FOUND);
    }
    if (!checkIsAuthor(issue, loggedUserId)) {
      throw new Error(messages.ACCESS_DENIED);
    }
    return issue;
  };

  const updateTitle = async (payload, loggedUserId) => {
    const { id, title } = payload;

    const issue = await getValidIssue(id, loggedUserId);
    issue.title = title;
    await issue.save();
  };

  const updateContents = async (payload, loggedUserId) => {
    const { id, contents } = payload;

    const issue = await getValidIssue(id, loggedUserId);
    issue.contents = contents;
    await issue.save();
  };

  return {
    getIssueList,
    getIssue,
    registerIssue,
    updateMilestone,
    updateLabels,
    updateTitle,
    updateContents,
    getUserbyName,
  };
};

export default IssueService;
