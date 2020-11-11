export default {
  getValidData(list, idx) {
    return list[idx % list.length];
  },
  getRandomDate(start, end) {
    const date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime()),
    );
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  },
};
