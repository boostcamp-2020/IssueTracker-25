import express from 'express';
import IssueController from './controller';
import IssueService from '../../services/issue';
import db from '../../models';

const {
  Issue: IssueModel,
  User: UserModel,
  Label: LabelModel,
  Milestone: MilestoneModel,
} = db.sequelize.models;

const router = express.Router();
const issueController = IssueController(
  IssueService({ IssueModel, UserModel, LabelModel, MilestoneModel }),
);

router.get('/', issueController.getIssueList);
router.get('/:id', issueController.getIssue);

export default router;
