import issueDummy from './dummy/issue';

function getIssueList(req, res) {
  res.json(issueDummy);
}

export default getIssueList;
