import express from 'express';
import getMilestoneList from '../service/milestone';

const router = express.Router();

router.get('', getMilestoneList);

export default router;
