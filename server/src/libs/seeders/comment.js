import db from '../../models';
import numModelData from './num-model-data';
import utils from '../utils';

const { Comment: CommentModel } = db.sequelize.models;

export async function up() {
  const {
    USER: nRowInUser,
    COMMENT: nRowInComment,
    ISSUE: nRowInIssue,
  } = numModelData;
  const baseContents = [
    '이 이슈는 이렇게 처리했습니다.',
    '정말 좋은 의견이십니다.',
  ];
  const userIds = new Array(nRowInUser).fill().map((x, idx) => idx + 1);
  const issueIds = new Array(nRowInIssue).fill().map((x, idx) => idx + 1);
  const bulkComment = new Array(nRowInComment)
    .fill()
    .reduce((comments, cur, idx) => {
      const userId = utils.getValidData(userIds, idx);
      const issueId = utils.getValidData(issueIds, idx);
      const contents = utils.getValidData(baseContents, idx);
      const comment = {
        contents,
        userId,
        issueId,
      };
      return [...comments, comment];
    }, []);
  await CommentModel.bulkCreate(bulkComment);
}

export async function down() {
  await CommentModel.destroy({ truncate: true, cascade: true });
}
