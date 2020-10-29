import express from 'express';
import getLabelList from '../service/label';

const router = express.Router();

router.get('/', getLabelList);

module.exports = router;
