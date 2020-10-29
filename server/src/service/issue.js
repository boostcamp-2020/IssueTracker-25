import fs from 'fs';
import path from 'path';

function getIssueList(req, res, next) {
  const filename = 'issueList.json';
  fs.readFile(path.join(__dirname, 'dumy', filename), 'utf-8', function (
    err,
    data,
  ) {
    if (err) next(err);
    res.json(JSON.parse(data));
  });
}

export default getIssueList;
