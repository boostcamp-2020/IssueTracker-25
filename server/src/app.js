import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import db from './models';
import router from './routes';
import seedInit from './libs/seeders';

const isProd = process.env.NODE_ENV === 'production';
const app = express();
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(router);

const syncOption = isProd ? {} : { alter: { drop: false } };
db.sequelize.sync(syncOption).then(async () => {
  if (!isProd) await seedInit();
});

export default app;
