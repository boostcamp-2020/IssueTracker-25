import express from 'express';
import LabelController from './controller';
import LabelService from '../../services/label';
import db from '../../models';

const { Label: LabelModel } = db.sequelize.models;

const router = express.Router();
const labelController = LabelController(LabelService({ LabelModel }));

router.get('/', labelController.getLabelList);

export default router;
