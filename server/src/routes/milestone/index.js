import express from 'express';
import MilestoneController from './controller';
import MilestoneService from '../../services/milestone';
import db from '../../models';

const { sequelize, Sequelize } = db;
const { Milestone: MilestoneModel, Issue: IssueModel } = db.sequelize.models;

const router = express.Router();
const milestoneController = MilestoneController(
  MilestoneService({ MilestoneModel, IssueModel, sequelize, Sequelize }),
);
router.get('/', milestoneController.getMilestoneList);

export default router;
