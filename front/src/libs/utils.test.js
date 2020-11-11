import utils from './utils';

test('리스트에서 조건에 맞는 엘리먼트의 갯수를 가져온다. ', () => {
  const dataList = [
    {
      isClosed: false,
    },
    {
      isClosed: true,
    },
  ];
  expect(utils.countFilteredElement(dataList, (data) => data.isClosed)).toBe(1);
  expect(utils.countFilteredElement(dataList, (data) => !data.isClosed)).toBe(
    1,
  );
});
