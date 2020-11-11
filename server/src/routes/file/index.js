import express from 'express';
import upload from '../../libs/upload';
import FileController from './controller';

const router = express.Router();

router.post('/', upload.single('file'), FileController.s3UploadCallback);

export default router;
