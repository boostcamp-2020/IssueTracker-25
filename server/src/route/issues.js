import express from 'express';
import getIssueList from '../service/issue';

const router = express.Router();

router.get('', getIssueList);

export default router;
