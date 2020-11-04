import express from 'express';
import UserController from './controller';
import UserService from '../../services/user';
import db from '../../models';

const { User: UserModel } = db.sequelize.models;

const router = express.Router();
const userController = UserController(UserService({ UserModel }));

router.get('/', userController.readList);

export default router;
