import express from 'express';
import getLabelList from '../services/label';

const router = express.Router();

router.get('/', getLabelList);

export default router;
