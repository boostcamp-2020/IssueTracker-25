const MilestoneService = ({
  MilestoneModel,
  IssueModel,
  sequelize,
  Sequelize,
}) => {
  const countOfIssueByMilestone = async () => {
    const count = await IssueModel.findAll({
      attributes: [
        'milestoneId',
        'isClosed',
        [sequelize.fn('COUNT', sequelize.col('id')), 'count'],
      ],
      where: {
        milestoneId: {
          [Sequelize.Op.not]: null,
        },
      },
      group: ['milestoneId', 'isClosed'],
    });
    return count;
  };
  const getMilestoneList = async () => {
    const milestones = await MilestoneModel.findAll();
    const counts = await countOfIssueByMilestone();
    return { milestones, counts };
  };

  return { getMilestoneList };
};

export default MilestoneService;
