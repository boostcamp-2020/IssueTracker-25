import express from 'express';
import getUserList from '../service/user';

const router = express.Router();

router.get('', getUserList);

module.exports = router;
