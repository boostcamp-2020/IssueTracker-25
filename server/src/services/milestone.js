import milestoneDummy from './dummy/milestone';

function getMilestoneList(req, res) {
  res.json(milestoneDummy);
}

export default getMilestoneList;
