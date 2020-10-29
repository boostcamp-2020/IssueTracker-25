import express from 'express';
import getIssueList from '../services/issue';

const router = express.Router();

router.get('', getIssueList);

export default router;
