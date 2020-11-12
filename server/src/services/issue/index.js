const IssueService = ({
  IssueModel,
  UserModel,
  LabelModel,
  MilestoneModel,
  CommentModel,
  Sequelize,
  sequelize,
}) => {
  const { Op } = Sequelize;
  const messages = {
    NOT_FOUND: '등록되지 않은 이슈 id 입니다.',
    ACCESS_DENIED: '접근 권한이 없습니다.',
  };
  const swapOption = (option) =>
    Object.keys(option).length === 0 ? undefined : option;
  const getPagedIssues = async ({ pageParams, whereOption }) => {
    const { page, LIMIT } = pageParams;
    const offset = (page - 1) * LIMIT;
    const issues = await IssueModel.findAndCountAll({
      attributes: {
        exclude: ['contents'],
      },
      where: swapOption(whereOption.open),
      subQuery: false,
      order: [['id', 'DESC']],
      offset,
      limit: LIMIT,
      include: [
        {
          model: UserModel,
          as: 'Author',
          attributes: ['id', 'name'],
          where: swapOption(whereOption.author),
        },
        {
          model: LabelModel,
          through: { attributes: [] },
          where: swapOption(whereOption.label),
        },
        {
          model: UserModel,
          as: 'Assignees',
          attributes: ['id', 'profileLink'],
          through: { attributes: [] },
          where: swapOption(whereOption.assignee),
        },
        {
          model: MilestoneModel,
          attributes: ['id', 'title'],
          where: swapOption(whereOption.milestone),
        },
      ],
    });
    return issues;
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

  const getIssue = async (issueId, loggedUserId) => {
    const issue = await IssueModel.findByPk(issueId, {
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
    const transaction = await sequelize.transaction();
    try {
      const issue = await IssueModel.create(newIssue, { transaction });
      const [labels, assignees] = await Promise.all([
        getAssociatedLabels(payload.labels),
        getAssociatedAssignees(payload.assignees),
      ]);
      if (labels) {
        await issue.addLabels(labels, { transaction });
      }
      if (assignees) {
        await issue.addAssignees(assignees, { transaction });
      }
      await transaction.commit();
      return issue.id;
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  };

  const updateCloseStatus = async (issueId) => {
    const issue = await IssueModel.findByPk(issueId);
    issue.isClosed = !issue.isClosed;
    if (issue.isClosed) issue.closedAt = new Date();
    await issue.save();
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
    const { issueId, title } = payload;
    const issue = await getValidIssue(issueId, loggedUserId);
    issue.title = title;
    await issue.save();
    return issue;
  };

  const updateContents = async (payload, loggedUserId) => {
    const { issueId, contents } = payload;

    const issue = await getValidIssue(issueId, loggedUserId);
    issue.contents = contents;
    await issue.save();
    return issue;
  };

  const updateMilestone = async (payload) => {
    const { issueId, milestoneId } = payload;
    const issue = await IssueModel.findByPk(issueId);
    const newMilestoneId =
      issue.milestoneId === milestoneId ? null : milestoneId;
    issue.milestoneId = newMilestoneId;
    await issue.save();
    return issue;
  };

  const updateLabels = async (payload) => {
    const { issueId, labels } = payload;
    const transaction = await sequelize.transaction();
    try {
      const issue = await IssueModel.findByPk(issueId, {
        include: {
          model: LabelModel,
          through: { attributes: [] },
        },
        transaction,
      });
      if (!issue) {
        throw new Error(messages.NOT_FOUND);
      }
      await issue.removeLabels(issue.Labels, transaction);
      const associatedLabels = await getAssociatedLabels(labels);
      if (associatedLabels) {
        await issue.addLabels(associatedLabels, transaction);
      }
      await transaction.commit();
      return issue;
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  };

  const updateAssignees = async (payload) => {
    const { issueId, assignees } = payload;
    const transaction = await sequelize.transaction();
    try {
      const issue = await IssueModel.findByPk(issueId, {
        include: {
          model: UserModel,
          as: 'Assignees',
          through: { attributes: [] },
        },
      });
      if (!issue) {
        throw new Error(messages.NOT_FOUND);
      }
      await issue.removeAssignees(issue.Assignees);
      const associatedAssignees = await getAssociatedAssignees(assignees);
      if (associatedAssignees) {
        await issue.addAssignees(associatedAssignees);
      }
      await transaction.commit();
      return issue;
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  };

  return {
    getIssueList,
    getIssue,
    registerIssue,
    updateCloseStatus,
    updateTitle,
    updateContents,
    updateMilestone,
    updateLabels,
    updateAssignees,
  };
};

export default IssueService;
