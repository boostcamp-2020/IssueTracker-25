import sequelize from 'sequelize';
import filterParser from './filter-parser';

jest.mock('sequelize');
const defaultOption = {
  open: { isClosed: false },
  author: {},
  assignee: {},
  milestone: {},
  label: {},
};
describe('filterParser-test', () => {
  let testname;
  beforeAll(() => {
    testname = 'test';
  });
  describe('is', () => {
    test('open', () => {
      const query = {
        is: 'open',
      };
      const whereOption = filterParser({ query, myName: testname });
      const expectOption = { ...defaultOption, open: { isClosed: false } };
      expect(whereOption).toStrictEqual(expectOption);
    });
    test('closed', () => {
      const query = {
        is: 'closed',
      };
      const whereOption = filterParser({ query, myName: testname });
      const expectOption = { ...defaultOption, open: { isClosed: true } };
      expect(whereOption).toStrictEqual(expectOption);
    });
    test('open closed', () => {
      const query = {
        is: ['open', 'closed'],
      };
      const whereOption = filterParser({ query, myName: testname });
      const expectOption = { ...defaultOption, open: { isClosed: true } };
      expect(whereOption).toStrictEqual(expectOption);
    });
    test('closed open', () => {
      const query = {
        is: ['closed', 'open'],
      };
      const whereOption = filterParser({ query, myName: testname });
      const expectOption = { ...defaultOption, open: { isClosed: false } };
      expect(whereOption).toStrictEqual(expectOption);
    });
  });
  describe('author', () => {
    test('@me', () => {
      const query = {
        author: '@me',
      };
      const whereOption = filterParser({ query, myName: testname });
      const expectOption = { ...defaultOption, author: { name: testname } };
      expect(whereOption).toStrictEqual(expectOption);
    });
    test('othername', () => {
      const query = {
        author: 'othername',
      };
      const whereOption = filterParser({ query, myName: testname });
      const expectOption = { ...defaultOption, author: { name: 'othername' } };
      expect(whereOption).toStrictEqual(expectOption);
    });
    test('over two author', () => {
      const query = {
        author: ['othername', 'othername2'],
      };
      const whereOption = filterParser({ query, myName: testname });
      const expectOption = { ...defaultOption, author: { name: 'othername2' } };
      expect(whereOption).toStrictEqual(expectOption);
    });
  });
  describe('assignee', () => {
    test('@me', () => {
      const query = {
        assignee: '@me',
      };
      const whereOption = filterParser({ query, myName: testname });
      const expectOption = { ...defaultOption, assignee: { name: testname } };
      expect(whereOption).toStrictEqual(expectOption);
    });
    test('other', () => {
      const query = {
        assignee: 'other',
      };
      const whereOption = filterParser({ query, myName: testname });
      const expectOption = { ...defaultOption, assignee: { name: 'other' } };
      expect(whereOption).toStrictEqual(expectOption);
    });
    test('over two assignee', () => {
      const query = {
        assignee: ['other', '@me'],
      };
      const whereOption = filterParser({ query, myName: testname });
      const expectOption = { ...defaultOption, assignee: { name: testname } };
      expect(whereOption).toStrictEqual(expectOption);
    });
  });
  describe('milestone', () => {
    test('one value', () => {
      const query = {
        milestone: 'milestone!!!!',
      };
      const whereOption = filterParser({ query, myName: testname });
      const expectOption = {
        ...defaultOption,
        milestone: { title: 'milestone!!!!' },
      };
      expect(whereOption).toStrictEqual(expectOption);
    });
    test('over two value', () => {
      const query = {
        milestone: ['one', 'two', 'three'],
      };
      const whereOption = filterParser({ query, myName: testname });
      const expectOption = {
        ...defaultOption,
        milestone: { title: 'three' },
      };
      expect(whereOption).toStrictEqual(expectOption);
    });
  });
  describe('label', () => {
    sequelize.Op = { in: 'and' };
    test('one label', () => {
      const query = {
        label: 'label1',
      };

      const whereOption = filterParser({ query, myName: testname });
      const expectOption = { ...defaultOption, label: { name: 'label1' } };
      expect(whereOption).toStrictEqual(expectOption);
    });
    test('over two labels', () => {
      const query = {
        label: ['label1', 'label2', 'label3'],
      };

      const whereOption = filterParser({ query, myName: testname });
      const expectOption = {
        ...defaultOption,
        label: { name: { and: ['label1', 'label2', 'label3'] } },
      };
      expect(whereOption).toStrictEqual(expectOption);
    });
  });
  describe('nop', () => {
    sequelize.Op = { in: 'and' };
    test('disable label', () => {
      const query = {
        label: 'label1',
        no: 'label',
      };
      const whereOption = filterParser({ query, myName: testname });
      const expectOPtion = {
        ...defaultOption,
        label: { id: [] },
      };
      expect(whereOption).toStrictEqual(expectOPtion);
    });
    test('disable assignee', () => {
      const query = {
        assignee: 'user1',
        no: 'assignee',
      };
      const whereOption = filterParser({ query, myName: testname });
      const expectOPtion = {
        ...defaultOption,
        assignee: { id: 0 },
      };
      expect(whereOption).toStrictEqual(expectOPtion);
    });
    test('disable milestone', () => {
      const query = {
        milestone: 'user1',
        no: 'milestone',
      };
      const whereOption = filterParser({ query, myName: testname });
      const expectOPtion = {
        ...defaultOption,
        milestone: { id: 0 },
      };
      expect(whereOption).toStrictEqual(expectOPtion);
    });
  });
});
