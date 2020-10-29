const fs = require('fs');
const path = require('path');

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

module.exports = {
  getIssueList,
};
