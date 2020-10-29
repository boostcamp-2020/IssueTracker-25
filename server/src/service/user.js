import fs from 'fs';
import path from 'path';

function getUserList(req, res, next) {
  const filename = 'user.json';
  fs.readFile(path.join(__dirname, 'dumy', filename), 'utf-8', function (
    err,
    data,
  ) {
    if (err) next(err);
    res.json(JSON.parse(data));
  });
}

export default getUserList;
