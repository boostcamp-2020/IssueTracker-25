const LabelService = ({ LabelModel }) => ({
  getLabelList() {
    return LabelModel.findAll();
  },
});

export default LabelService;
