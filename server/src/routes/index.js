import express from 'express';
import userRouter from './user';
import issueRouter from './issue';
import labelRouter from './label';
import milestoneRouter from './milestone';
import OAuthApi from './oauth';

const router = express.Router();

router.use('/oauth', OAuthApi);
router.use('/users', userRouter);
router.use('/issues', issueRouter);
router.use('/labels', labelRouter);
router.use('/milestones', milestoneRouter);

export default router;
