import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import passport from 'passport';
import db from './models';
import router from './routes';
import seedInit from './libs/seeders';
import passportLoader from './libs/passport';

const isProd = process.env.NODE_ENV === 'production';
const app = express();
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());

app.use(router);

passportLoader();

const syncOption = isProd ? {} : { alter: { drop: false } };
db.sequelize.sync(syncOption).then(async () => {
  if (!isProd) await seedInit();
});

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

export default app;
