const LabelController = (labelService) => ({
  async getLabelList(req, res, next) {
    try {
      const labels = await labelService.getLabelList();
      return res.status(200).json(labels);
    } catch (err) {
      return next(err);
    }
  },
});

export default LabelController;
