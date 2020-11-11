const MilestoneController = (milestoneService) => ({
  async getMilestoneList(req, res, next) {
    try {
      const milestones = await milestoneService.getMilestoneList();
      return res.status(200).json(milestones);
    } catch (err) {
      return next(err);
    }
  },
});

export default MilestoneController;
