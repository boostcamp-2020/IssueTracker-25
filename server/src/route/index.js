import express from 'express';
import fs from 'fs';
import path from 'path';

function setRouter(app) {
  const router = express.Router();
  const basename = path.basename(__filename);

  fs.readdirSync(__dirname)
    .filter(
      (file) =>
        file.indexOf('.') !== 0 &&
        file !== basename &&
        file.slice(-3) === '.js',
    )
    .forEach((file) => {
      import(path.join(__dirname, file)).then((target) => {
        const routerURL = file.slice(0, file.indexOf('.'));
        router.use(`/${routerURL}`, target.default);
      });
    });
  app.use(router);
}

export default setRouter;
