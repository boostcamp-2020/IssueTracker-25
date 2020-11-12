import express from 'express';
import IssueController from './controller';
import IssueService from '../../services/issue';
import db from '../../models';

const { Sequelize, sequelize } = db;

const {
  Issue: IssueModel,
  User: UserModel,
  Label: LabelModel,
  Milestone: MilestoneModel,
  Comment: CommentModel,
} = sequelize.models;

const router = express.Router();
const issueController = IssueController(
  IssueService({
    IssueModel,
    UserModel,
    LabelModel,
    MilestoneModel,
    CommentModel,
    Sequelize,
    sequelize,
  }),
);

router.get('/', issueController.getIssueList);
router.get('/:id', issueController.getIssue);
router.post('/', issueController.registerIssue);
router.put('/:id/is-closed', issueController.updateIssueCloseStatus);
router.put('/:id/milestones', issueController.updateMilestone);
router.put('/:id/labels', issueController.updateLabels);
router.put('/:id/title', issueController.updateTitle);
router.put('/:id/contents', issueController.updateContents);
router.put('/:id/assignees', issueController.updateAssignees);
export default router;
