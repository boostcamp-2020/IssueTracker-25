export default {
  getValidData(list, idx) {
    return list[idx % list.length];
  },
};
