import express from 'express';
import CommentController from './controller';
import CommentService from '../../services/comment';
import db from '../../models';

const router = express.Router();
const { sequelize } = db;

const { Comment: CommentModel, User: UserModel } = sequelize.models;

const commentController = CommentController(
  CommentService({
    CommentModel,
    UserModel,
    sequelize,
  }),
);

router.post('/', commentController.registerComment);

export default router;
