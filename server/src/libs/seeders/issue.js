import db from '../../models';
import numModelData from './num-model-data';
import utils from '../utils';

const {
  Issue: IssueModel,
  Label: LabelModel,
  User: UserModel,
} = db.sequelize.models;

export async function up() {
  const {
    USER: nRowInUser,
    ISSUE: nRowInIssue,
    MILESTONE: nRowInMilestone,
  } = numModelData;
  const baseTitle = '이슈 ';
  const baseContents = '목표 : 이 이슈를 끝낸다.';
  const userIds = new Array(nRowInUser).fill().map((x, idx) => idx + 1);
  const milestoneIds = [
    ...new Array(nRowInMilestone).fill().map((x, idx) => idx + 1),
    null,
  ];

  const bulkIssues = new Array(nRowInIssue)
    .fill()
    .reduce((issues, cur, idx) => {
      const authorId = utils.getValidData(userIds, idx);
      const milestoneId = utils.getValidData(milestoneIds, idx);
      const closedStatus = Math.floor(Math.random() * 2) === 0;

      const issue = {
        title: `${baseTitle} ${idx}`,
        contents: baseContents,
        authorId,
        milestoneId,
        isClosed: closedStatus,
        closedAt: closedStatus
          ? utils.getRandomDate(new Date(), new Date(2020, 11, 31))
          : null,
      };
      return [...issues, issue];
    }, []);
  const issues = await IssueModel.bulkCreate(bulkIssues, { returning: true });
  await setAssociateData(issues);
}

async function setAssociateData(issues) {
  issues.forEach(async (issue, idx) => {
    const [label, user] = await Promise.all([
      LabelModel.findOne({
        where: { id: (idx % numModelData.LABEL) + 1 },
      }),
      UserModel.findOne({
        where: { id: (idx % numModelData.USER) + 1 },
      }),
    ]);
    issue.addLabel(label);
    issue.addAssignee(user);
  });
}

export async function down() {
  await IssueModel.destroy({ truncate: true, cascade: true });
}
