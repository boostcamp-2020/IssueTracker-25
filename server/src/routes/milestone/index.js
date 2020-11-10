import express from 'express';
import MilestoneController from './controller';
import MilestoneService from '../../services/milestone';
import db from '../../models';

const { sequelize } = db;
const { Milestone: MilestoneModel } = db.sequelize.models;

const router = express.Router();
const milestoneController = MilestoneController(
  MilestoneService({ MilestoneModel, sequelize }),
);
router.get('/', milestoneController.getMilestoneList);

export default router;
