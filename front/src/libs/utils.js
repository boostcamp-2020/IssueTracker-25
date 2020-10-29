export default {
  countFilteredElement(list, condition) {
    const filteredList = list.filter((element) => condition(element));
    return filteredList.length;
  },
};
