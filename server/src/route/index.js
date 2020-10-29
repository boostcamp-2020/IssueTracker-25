import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

const basename = path.basename(__filename);

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js',
  )
  .forEach((file) => {
    const target = require(path.join(__dirname, file));
    const routerURL = file.slice(0, file.indexOf('.'));
    router.use(`/${routerURL}`, target);
  });

module.exports = router;
