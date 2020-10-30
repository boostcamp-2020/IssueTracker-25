import express from 'express';
import getUserList from '../services/user';

const router = express.Router();

router.get('', getUserList);

export default router;
