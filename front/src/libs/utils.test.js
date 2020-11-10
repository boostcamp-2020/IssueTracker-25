import moment from 'moment';
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

describe('현재시간보다 지났는지 확인할 때,', () => {
  test('현재시간이 기준 시간보다 지났으면 true를 반환한다.', () => {
    const date = '2020-11-10 13:27:11';
    expect(utils.isTimePassedFromNow(date)).toBeTruthy();
  });
  test('현재시간이 기준 시간을 지나지 않았으면 false를 반환한다.', () => {
    const date = '2022-11-10 13:28:11';
    expect(utils.isTimePassedFromNow(date)).toBeFalsy();
  });
});
describe('시작 시간부터 끝 시간을 확인할 때,', () => {
  test('현재 시간이 시작과 끝 사이에 있으면, [0, 100) 범위의 값을 반환한다.', () => {
    const createdAt = moment('2020-10-31 09:00:00');
    const endDate = moment('2020-12-29 21:55:03');
    expect(utils.getProgressRate(createdAt, endDate)).toBeGreaterThanOrEqual(0);
    expect(utils.getProgressRate(createdAt, endDate)).toBeLessThan(100);
  });
  test('현재 시간이 끝 시간보다 지났다면, 100을 반환한다.', () => {
    const createdAt = moment('2020-10-31 09:00:00');
    const endDate = moment('2020-11-01 21:55:03');
    expect(utils.getProgressRate(createdAt, endDate)).toBe(100);
  });
});
