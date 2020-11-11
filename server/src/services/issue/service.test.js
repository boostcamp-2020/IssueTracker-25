import IssueService from '.';

describe('getIssue() Tests', () => {
  const mockSequelize = { Op: { in: 'Op' } };

  test('요청한 사람과 작성자가 같으면 isAuthor가 true 이다', async () => {
    const mockIssue = {
      authorId: 1,
      toJSON: () => ({ authorId: 1 }),
    };
    const IssueModel = {
      findByPk() {
        return Promise.resolve(mockIssue);
      },
    };

    const issueService = IssueService({ IssueModel, Sequelize: mockSequelize });
    const issue = await issueService.getIssue(1, 1);
    expect(issue.isAuthor).toBeTruthy();
  });

  test('요청한 사람과 작성자가 같으면 isAuthor가 false 이다', async () => {
    const mockIssue = {
      authorId: 1,
      toJSON: () => ({ authorId: 1 }),
    };
    const IssueModel = {
      findByPk() {
        return Promise.resolve(mockIssue);
      },
    };
    const issueService = IssueService({ IssueModel, Sequelize: mockSequelize });
    const issue = await issueService.getIssue(1, 2);
    expect(issue.isAuthor).toBeFalsy();
  });
});
