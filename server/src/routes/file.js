import express from 'express';
import upload from '../libs/upload';

const router = express.Router();

router.post('/', upload.single('file'), (req, res, next) => {
  try {
    const { location } = req.file;
    const payLoad = { url: location };
    res.json(payLoad);
  } catch (err) {
    next(err);
  }
});

export default router;
