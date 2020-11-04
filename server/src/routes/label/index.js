import express from 'express';
import LabelController from './label-controller';
import LabelService from '../../services/label';
import LabelModel from '../../models/label';

const router = express.Router();
const labelController = LabelController(LabelService({ LabelModel }));

router.get('/', labelController.readList);

export default router;
