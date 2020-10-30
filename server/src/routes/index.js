import express from 'express';
import userApi from './user';
import issueApi from './issue';
import labelApi from './label';
import milestoneApi from './milestone';

const router = express.Router();

router.use('/users', userApi);
router.use('/issues', issueApi);
router.use('/labels', labelApi);
router.use('/milestones', milestoneApi);

export default router;
