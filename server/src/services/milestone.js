const MilestoneService = ({ MilestoneModel, sequelize }) => {
  const query = (isClosed) => {
    return `(
    SELECT COUNT(*)
    FROM issues AS issue
    WHERE
        issue.milestone_id = milestone.id
        AND
        issue.is_closed = ${isClosed}
    )`;
  };
  const getMilestoneList = async () => {
    const milestones = await MilestoneModel.findAll({
      attributes: {
        include: [
          [sequelize.literal(query(true)), 'closedCount'],
          [sequelize.literal(query(false)), 'openedCount'],
        ],
      },
    });
    return milestones;
  };

  return { getMilestoneList };
};

export default MilestoneService;
