import express from 'express';
import getMilestoneList from '../services/milestone';

const router = express.Router();

router.get('', getMilestoneList);

export default router;
