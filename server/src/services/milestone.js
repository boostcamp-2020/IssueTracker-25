const MilestoneService = ({ MilestoneModel }) => ({
  getMilestoneList() {
    return MilestoneModel.findAll();
  },
});

export default MilestoneService;
