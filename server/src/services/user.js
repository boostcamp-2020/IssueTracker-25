import userDummy from './dummy/user';

function getUserList(req, res) {
  res.json(userDummy);
}

export default getUserList;
