import express from 'express';
import getMilestoneList from '../service/milestone';

const router = express.Router();

router.get('', getMilestoneList);

module.exports = router;
