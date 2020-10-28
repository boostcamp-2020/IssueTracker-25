/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const express = require('express');

const router = express.Router();
const fs = require('fs');
const path = require('path');

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
